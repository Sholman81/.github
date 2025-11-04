const main = require('./update-profile');
const axios = require('axios');
const fs = require('fs');

jest.mock('axios');
jest.mock('fs');

describe('update-profile', () => {
  it('should update the profile README.md correctly', async () => {
    const mockData = {
      actions: [
        { name: 'action1', url: 'http://example.com/action1', desc: 'Description 1' },
        { name: 'action2', url: 'http://example.com/action2', desc: 'Description 2' },
      ],
    };
    const mockReadme = '### Cool List';

    axios.get.mockResolvedValue({ data: `var cool =  ${JSON.stringify(mockData)};` });
    fs.readFileSync.mockReturnValue(mockReadme);

    await main();

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './profile/README.md',
      expect.stringContaining('[action1](http://example.com/action1) | Description 1')
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './profile/README.md',
      expect.stringContaining('[action2](http://example.com/action2) | Description 2')
    );
  });
});
