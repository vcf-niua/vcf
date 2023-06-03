import { API_ENDPOINT_CMS } from './const.jsx';

export default function fetchData(url, type='GET', params={}) {
    let u = API_ENDPOINT_CMS + '/api/' + url + '?'
    let token = '2d9d7c0ce40e349a50dcfd0a21faf37f3f5e75cbfb06099274bbf12580ca10ac326a4836710ff5d9651ca186af891a1cd95e3ea679682242d2eeea1ddf8510d45650ad50817eb1162187b2a18834237fc94326a1a44168d0ad9e620f3545e693cd5b695906fa36bb80e2e65f50d6bf06867f4ad89a05199e39a480476f5f3db5'
    
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
