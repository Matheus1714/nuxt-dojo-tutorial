interface QueryParams{
    name?: string
}

interface BodyParams{
    age?: number
}

export default defineEventHandler(async (event) => {

    const  { name } = getQuery<QueryParams>(event)

    const { age } = await readBody<BodyParams>(event)

    // const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_Ahe6L7IBTW2RHN6yfXXzZXIrfXcrnTQrso4bAHej&currencies=EUR%2CUSD%2CCAD')

    return {
        message: `Hello, ${name}! Your are ${age} years old.`
    }
})