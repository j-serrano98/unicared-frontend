import fetcher from './fetcher';

export function login(data) {
    return fetcher('auth/login/', {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

export function register(data) {
    return fetcher('auth/register/', {
        method: 'POST',
        body: JSON.stringify(data)
    })
}