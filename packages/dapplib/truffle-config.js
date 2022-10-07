require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net puppy harvest clinic sugar sport'; 
let testAccounts = [
"0x9cc7637cf0532d0c02f8f3af86eab930a325c0843f7ef74b5c863c6774065e30",
"0x61e5b8661a7bb77a74ca30161d18936b75eb9732077405d50d74950e58f0e831",
"0xf5c1afd7f86eeff5f554b6ea35f45a7b742be8b0001e9c9df4ef46262b73d930",
"0xa3e1e6b03a7cac45b36dd653a57e2919f80231c729f33da085a23cf04aabec63",
"0x9d7ab2745fa09d6c85b5c1981b2c13e5979e807762a2a5a6a75ef166f01da33e",
"0xab9b105d03f576c6b15b98ae519c0e2c66dd741e46caa6c5386e3661758715fb",
"0xf8af434f6730d8fda99f7a103bec7b6ab50bbb8bc7c3b809f4b770801d0144cd",
"0x5de07e7ef14b02aa2d0e404f58b1e73c95697a9e48a7dec2d07c460ed05fa91f",
"0x56905412eb72a489f6bf48472f5b5b6c8453e83292c20cb2a41228007816af07",
"0x4241a37346378f205643138645ce69d3fbf25fabf04e8b71f22b609a229648cb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


