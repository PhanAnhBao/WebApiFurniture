import http from '../baseURL';

export function getAll() {
    return http.get('/products-client/');
}

export function getProductSlug(slug) {
    return http.get(`/products-client/${slug}`);
}

export function getLimited() {
    return http.get('/products-client/limit');
}


