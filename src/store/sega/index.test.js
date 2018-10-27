import { fetchHistory } from './index';

import { fetchAllSessionsAsync } from '../../services/ApiService';

const fetchTest = async () => {
  return await fetchAllSessionsAsync();
}

describe('History fetching flow', () => {
  it('Fetch History successfully', () => {
    const generator = fetchHistory();
    const restul = fetchTest();

    expect(generator.next().value)
      .toEqual(fetchTest());

  });
});
