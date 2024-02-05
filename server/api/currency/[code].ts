interface Params {
    code: string
}

export default defineEventHandler(async (event) => {

    const { code } = event.context.params
    const { currencyApiKey } = useRuntimeConfig()

    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyApiKey}`

    const { data } = await $fetch(uri)

    return data
})