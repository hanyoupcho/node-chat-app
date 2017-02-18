/*jshint esversion: 6 */
var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Deb';
    var latitude = 37.65835990000001;
    var longitude = 126.8320201;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var locationMessage = generateLocationMessage(from, latitude, longitude);

    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});
  });
});
