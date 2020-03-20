const { BASE_URL_MAGALU } = require('../../config')
const { factoryApi } = require('../../helpers/axios/axios')

const { getProductsAsync, setProducts } = require('./repository')

const api = factoryApi(BASE_URL_MAGALU)

exports.findProducts = async (idProduct) => {
    try {
        const respCache = await getProductsAsync(idProduct)

        if (respCache) return JSON.parse(respCache)

        const respAxios = await api.get(`product/${idProduct}`)

        setProducts(idProduct, respAxios.data)

        return respAxios.data
    } catch (err) {
        throw new Error(err)
    }
}
