/**
 * This is an example REST Client. It could use axios to connect
 * with the backend API.
 * 
 * @category API
 * @see https://github.com/axios/axios
 * @example <caption>Using the client library</caption>
 * const client = new RESTClient({ token: 'myToken' })
 * const records = await client.getSomeRecords(resourceId)
 * 
 * @example <caption>Hitting a different API version</caption>
 * const client = new RESTClient({ token: 'myToken', apiVersion: 1 })
 */
class RESTClient {
  /**
   * @param   {Object}  options
   * @param   {Number}  [options.apiVersion=2]  version of the API
   * @param   {String}  options.token           authentication token
   */
  constructor({ apiVersion = 2, token }) {
    // constructor body
  }

  /**
   * You can even define your own types in JSDoc
   * 
   * @typedef {Object} RESTClient~Record
   * @property {String} first      Some example property
   * @property {String} another    Another property
   */

  /**
   * This could be a function returning data from the
   * REST API. It returns a newly created type: {@link RESTClient~Record}
   *
   * @param   {String}  mainKey  Example property which serves
   *                             as a key in the records lookup
   *                             process
   *
   * @return  {Promise<Array<RESTClient~Record>>}
   */
  async getSomeRecords(mainKey) {
    // method body
  }
}

export default RESTClient
