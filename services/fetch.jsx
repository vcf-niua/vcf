import { API_ENDPOINT_CMS } from './const.jsx';

export default function fetchData(url, type='GET', params={}) {
    let u = API_ENDPOINT_CMS + '/api/' + url + '?'
    let token = '4bd7645b0edb9e824b098b6718b68addd1063cda00b23d921aa0e918668239b7ec4daff35992e0d29e750f0a8a26452f4c6e1b610dc9a8465b1e9a5f23573a74ea8d7f6641bf345130a6760096fa94d699a8fa20f2e73944c93050ff78e9d75af9949020ff6b8ce822a34e6f5e4928cc5588836b1d901d2dac78b05808285d44'
    
    var urlParams = new URLSearchParams(params)

    var headers = new Headers();
    headers.append('Accept','application/jsonn')
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Bearer ' + token)
    let options = {
        method: type, // POST, PUT, DELETE, etc.
        headers: headers
    }
    return fetch(u + urlParams, options)
}

export function loginCMS(data) {
    let url = 'auth/local'
    let u = API_ENDPOINT_CMS + '/' + url
    return fetch(u, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export function meCMS(token) {
    let url = 'users/me'
    let u = API_ENDPOINT_CMS + '/' + url
    return fetch(u, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
}
