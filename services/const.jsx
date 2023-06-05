export let API_ENDPOINT_CMS = 'http://localhost:1337'
API_ENDPOINT_CMS = 'https://vcf.niua.in'

if (!process.env.NODE_ENV || process.env.NODE_ENV == 'production') {
    API_ENDPOINT_CMS = 'https://vcf.niua.in'
}
