exports.port = 8000;
exports.setuid = '';
exports.protocol = 'ws';
exports.serverid = 'nollan101server';
exports.tokenexpiry = 25*60*60;
exports.servertoken = 'exampletoken-382hgraw4jr2tioq';
exports.proxyip = false;
exports.loginserver = 'http://play.pokemonshowdown.com/';
exports.loginserverkeyalgo = "RSA-SHA1";
exports.loginserverpublickeyid = 1;
exports.loginserverpublickey = "-----BEGIN PUBLIC KEY-----\n" +
"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA2O8mOdl6ELJvx+XufPNk\n" +
"piAwG6G7dOG61RCly4inBtQ8OgAcotfbq1km1FIZJ4II7IzcmGAwQLoBb9TfpNNi\n" +
"+rN4shVth15riL4ip6YjKNxH4EFPTgvq5GnPmXdIIDxYnzRd3hIVqsCu6iKNcQm+\n" +
"e/yyQEd4NRCtNeQEHodkZK/7usZzY9gzePQeS6OclzXaS6G99dNBP3Z6frapEckE\n" +
"B2TSjcOvFaHWqbMR1Tk+B7ZEFvOXjsjlcL8PByqRErHglIxeujqtjzR46sLq6ofJ\n" +
"vohoUaig9PjfEfyPgcObzOjUki9QLcRcvqUZGTKmDUTgwjCGY22OlvfYI+qW0hxx\n" +
"mQIDAQAB\n" +
"-----END PUBLIC KEY-----\n";
exports.potd = 'Kitsunoh';
exports.crashguard = true;
exports.reportjoins = true;
exports.reportbattles = true;
exports.modchat = false;
exports.backdoor = true;
exports.consoleips = ['127.0.0.1'];
exports.watchconfig = false;
exports.loglobby = false;
exports.loguserstats = 1000*60*10;
exports.simulatorprocesses = 1;
exports.inactiveuserthreshold = 1000*60*60;
exports.blacklist = [
/\bnimp\.org\b/
];
exports.groupsranking = [' ', '•', 'ᴥ', '҈', '۩', '۞'];
  '۞': {
        id: "admin",
        name: "Administrator",
        root: true,
        rank: 5
  },
  '۩': {
        id: "leader",
        name: "Leader",
        inherit: '҈',
        jurisdiction: '҈u',
        promote: 'u',
        declare: true,
        potd: true,
        modchatall: true,
        namelock: true,
        forcerenameto: true,
        rank: 4
  },
  '҈': {
        id: "mod",
        name: "Moderator",
        inherit: 'ᴥ',
        jurisdiction: 'u',
        ban: true,
        modchat: true,
        redirect: true,
        forcerename: true,
        modlog: true,
        ip: true,
        potd: true,
        alts: '҈u',
        rank: 3
  },
  'ᴥ': {
        id: "driver",
        name: "Driver",
        inherit: '•',
        jurisdiction: 'u',
        announce: true,
        warn: true,
        mute: true,
        forcerename: true,
        timer: true,
        alts: 'ᴥu',
        bypassblocks: 'uᴥ҈۩۞',
        receiveauthmessages: true,
        rank: 2
  },
  '•': {
        id: "voice",
        name: "Voice",
        inherit: ' ',
        broadcast: true,
        rank: 1
  },
  ' ': {
        ip: 's',
        alts: 's',
        rank: 0
  }
};