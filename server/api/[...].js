export default defineEventHandler((event) => {
    const URL = event.node.req.url.split("/").slice(2).join("/")
    console.log(event.params)
    return $fetch(`https://restcountries.com/v3.1/${URL}`)
})