import stockMarketProfit from '../../src/contract-solvers/stockMarketProfit';

const contract = (name, arrayString, expected, maxTransactions) => {
  test(name, () => {
    const prices = arrayString.split(',').map(Number);
    const profit = stockMarketProfit(prices, maxTransactions || prices.length - 1);
    expect(profit).toBe(expected);
  });
};

describe('stockMarketProfit', () => {
  contract(
    'contract-88589',
    '98,148,155,118,184,126,183,188,10,181,134,167,73,99,129,24,146,189,25,163,183,2,61,28,77,104,132,30,17,26,121,16,87,65,126,81,99,57,77,172,77,5,86,186,3',
    1481,
  );

  contract('contract-92936', '48,27,167', 140);

  contract(
    'contract-97449',
    '103,34,51,94,60,12,64,71,58,35,75,50,157,53,98,71,185,187,29,7,171,34,139,35,88,122,66,143,12',
    339,
    2,
  );

  contract(
    'contract-167227',
    '154,70,10,193,107,189,11,47,130,157,2,141,151,95,121,116,120,123,169,28,73,176,63,31,129,106,182,77,123,69,18,38,96,42,48',
    363,
    2,
  );

  contract(
    'contract-263297',
    '86,86,5,58,164,3,2,114,33,136,175,146,34,178,190,56,186,19,11,88,86,39,74,96,104,83,190,43,8',
    188,
    1,
  );

  contract(
    'contract-263297~2',
    '82,176,139,143,118,15,106,29,27,28,45,153,163,105,156,24,97,72,156,41,34,71,83,28,178,67,82,192,146,64,166,30,182,77,85,151,18,126,179,112,131,28',
    177,
    1,
  );

  contract('contract-509141', '57,137,39,23,37,157,152,14,196,122', 182, 1);

  contract('contract-513233', '112,25,122,7,9,20,188,79,20,58,70,134,193,25,163,61,57,5,126,48', 710);

  contract(
    'contract-589948',
    '46,124,47,142,31,125,114,10,140,157,8,6,145,22,25,88,78,71,91,74,67,46,119,177,126,96,102,149,71,74,196,90,183,71,153,83,146,29,38,50,116,21,196,119,32,142',
    365,
    2,
  );

  contract('contract-666611', '159,175,15,18,87,188,105,188,118,71,103,125,3,110,59,164,63,92,173,18,156,120', 786);
});
