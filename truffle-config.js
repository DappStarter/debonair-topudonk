require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind mistake idea private bridge tail'; 
let testAccounts = [
"0xe41e75e06257ee64ca092a6c5bbac4c367f6b36ab021e534744c362f76383726",
"0x39c3f6cc736d49aed9846e2c754b2dbe9f6531c7bcafb8af77c8acc440f298e5",
"0xffba5ab661473a1ea425f6f10cdbb858994486b16fc0cec3685a7c83820c827f",
"0x8932a2f507d6466f7f65f06e5ac4f2e49ee78d1556f1bc69d88fa0c3b4da4543",
"0xe7acbd06054dbf962dc69f8bee9745bddf7c9c784d64ee756b859297e68576aa",
"0x4f92d8f1b75ebc1095df9a5962f598cdbb6dff3d5407c6e701c2497e03738ce8",
"0xa9745e33798cddcc226eae6c4c61588ee53c495deaaa588f15bd63a5c7d572cc",
"0x20cde0b6e65da724c1ea89237a9a96bbc575d7e2a5d0d0989a957e76f4d51fa9",
"0x7006aef123e489cb775a7a3df51e6f971ef7cf1db79aac98f1b871873d694757",
"0xff400c6564daaefbc9433bb98a858bd94ff0359c09263d265720d2d3c072d068"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
