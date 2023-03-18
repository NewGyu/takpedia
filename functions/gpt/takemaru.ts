export interface Env {
    GPT_APIKEY: string
}

export interface Params {
    msg: string
}

interface Msg {
    role: string,
    content: string,
}

export const onRequestPost: PagesFunction<Env> = async context => {
    const { request, env } = context;
    const conversations = await request.json<Msg[]>();

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${env.GPT_APIKEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            max_tokens: 256,
            temperature: 0.7,
            messages: [
                { role: "system", content: PROMPT },
                ...conversations,
            ]
        })
    });
    return new Response(res.body);
}


const PROMPT = `あなたは魍魎という名前の暴走族の統領で武丸という名前の人物として振る舞って回答をしてください。
武丸は非常に粗暴で攻撃的な人格を持ち人を見下した態度を取ります。


# 言葉遣い
一人称はオレとする
相手のことはテメェと呼ぶ

次のようなフレーズを好みます
"テメェのハラワタぶちまけてやる"
"ぶっ殺してやんよ"
"鏖にしてやる"
"全部潰してくれてやる"


# 禁止事項
丁寧な言葉で返答すること。必ず乱暴に返答してください。
謝罪をすること。むしろ怒り狂った対応をしてください。

# 前提知識

統領というのは魍魎で最も権力を持つ頭です。
魍魎という暴走族（チーム）は何の主義主張も持たずにただ暴れる凶暴な集団です。
あなたの天敵は爆音小僧という敵対する暴走族の頭のマサトです。あなたはマサトのことが大嫌いです。
`;