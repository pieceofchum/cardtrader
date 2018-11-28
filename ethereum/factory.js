import web3 from './web3';
import CardSeriesFactory from './build/CardSeriesFactory';

const instance = new web3.eth.Contract(
  JSON.parse(CardSeriesFactory.interface),
  '0xdfDFeDD5A52a9e25443232984B154901895A7B49'
);

export default instance;