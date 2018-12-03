import web3 from './web3';
import CardSeriesFactory from './build/CardSeriesFactory';

const instance = new web3.eth.Contract(
  JSON.parse(CardSeriesFactory.interface),
  '0x5AD329Dd9b4EBcCE32017aC4E90297BB7A3Ae077'
);

export default instance;