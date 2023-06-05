import { API_ENDPOINT_CMS } from './const.jsx';

export default function fetchData(url, type='GET', params={}) {
    let u = API_ENDPOINT_CMS + '/api/' + url + '?'
    let token = '77c33262012d0a38dbdc789b85d4a795bf97b7efb2a07ed17701e0d2adce52db57143399ba33fe07db232ba1a3adbf04e27482406f584aebaffeda7e03e84df54cced12274b11c2319c31ec7dfa21a8d6c84b44daaa56a9234a20553a8bb6eec81823f6d259a4285c596d54daec318572e6a7ebe751208c78ac753de0218bcbc'
    
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
