// keys will map name to x11 keycode
const keys = {};
keys.space = 0x0020;
keys.comma = 0x002c;
keys.minus = 0x002d;
keys.period = 0x002e;
keys.slash = 0x002f;
keys['0'] = 0x0030;
keys['1'] = 0x0031;
keys['2'] = 0x0032;
keys['3'] = 0x0033;
keys['4'] = 0x0034;
keys['5'] = 0x0035;
keys['6'] = 0x0036;
keys['7'] = 0x0037;
keys['8'] = 0x0038;
keys['9'] = 0x0039;
keys.semicolon = 0x003b;
keys.equals = 0x003d;
keys.a = 0x0041;
keys.b = 0x0042;
keys.c = 0x0043;
keys.d = 0x0044;
keys.e = 0x0045;
keys.f = 0x0046;
keys.g = 0x0047;
keys.h = 0x0048;
keys.i = 0x0049;
keys.j = 0x004a;
keys.k = 0x004b;
keys.l = 0x004c;
keys.m = 0x004d;
keys.n = 0x004e;
keys.o = 0x004f;
keys.p = 0x0050;
keys.q = 0x0051;
keys.r = 0x0052;
keys.s = 0x0053;
keys.t = 0x0054;
keys.u = 0x0055;
keys.v = 0x0056;
keys.w = 0x0057;
keys.x = 0x0058;
keys.y = 0x0059;
keys.z = 0x005a;
keys.bracket_left = 0x005b;
keys.backslash = 0x005c;
keys.bracket_right = 0x005d;
keys.grave = 0x0060;
keys.a = 0x0061;
keys.b = 0x0062;
keys.c = 0x0063;
keys.d = 0x0064;
keys.e = 0x0065;
keys.f = 0x0066;
keys.g = 0x0067;
keys.h = 0x0068;
keys.i = 0x0069;
keys.j = 0x006a;
keys.k = 0x006b;
keys.l = 0x006c;
keys.m = 0x006d;
keys.n = 0x006e;
keys.o = 0x006f;
keys.p = 0x0070;
keys.q = 0x0071;
keys.r = 0x0072;
keys.s = 0x0073;
keys.t = 0x0074;
keys.u = 0x0075;
keys.v = 0x0076;
keys.w = 0x0077;
keys.x = 0x0078;
keys.y = 0x0079;
keys.z = 0x007a;
keys.sleep = 0x008E;
keys.backspace = 0xff08;
keys.tab = 0xff09;
keys.enter = 0xff0d;
keys.pause = 0xff13;
keys.scroll_lock = 0xff14;
keys.escape = 0xff1b;
keys.delete = 0xffff;
keys.f1 = 0xffbe;
keys.f2 = 0xffbf;
keys.f3 = 0xffc0;
keys.f4 = 0xffc1;
keys.f5 = 0xffc2;
keys.f6 = 0xffc3;
keys.f7 = 0xffc4;
keys.f8 = 0xffc5;
keys.f9 = 0xffc6;
keys.f10 = 0xffc7;
keys.f11 = 0xffc8;
keys.f12 = 0xffc9;
keys.f13 = 0xffca;
keys.f14 = 0xffcb;
keys.f15 = 0xffcc;
keys.f16 = 0xffcd;
keys.f17 = 0xffce;
keys.f18 = 0xffcf;
keys.f19 = 0xffd0;
keys.f20 = 0xffd1;
keys.f21 = 0xffd2;
keys.f22 = 0xffd3;
keys.f23 = 0xffd4;
keys.f24 = 0xffd5;
keys.apostrophe = 0x0027;
keys.shift_left = 0xffe1;
keys.shift_right = 0xffe2;
keys.control_left = 0xffe3;
keys.control_right = 0xffe4;
keys.caps = 0xffe5;
keys.meta_left = 0xffe7;
keys.meta_right = 0xffe8;
keys.alt_left = 0xffe9;
keys.alt_right = 0xffea;
keys.super_left = 0xffeb;
keys.super_right = 0xffec;
keys.compose = 0xff20;
keys.kp_enter = 0xff8d;
keys.kp_multiply = 0xffaa;
keys.kp_add = 0xffab;
keys.kp_subtract = 0xffad;
keys.kp_period = 0xffae;
keys.kp_divide = 0xffaf;
keys.kp_0 = 0xffb0;
keys.kp_1 = 0xffb1;
keys.kp_2 = 0xffb2;
keys.kp_3 = 0xffb3;
keys.kp_4 = 0xffb4;
keys.kp_5 = 0xffb5;
keys.kp_6 = 0xffb6;
keys.kp_7 = 0xffb7;
keys.kp_8 = 0xffb8;
keys.kp_9 = 0xffb9;
keys.sysrq = 0xff15
keys.print = 0xff6;
keys.insert = 0xff63;
keys.undo = 0xff6;
keys.redo = 0xff66;
keys.menu = 0xff6;
keys.find = 0xff68;
keys.num_lock = 0xff7;
keys.stop = 0xff69;
keys.help = 0xff6a;
keys.home = 0xff50;
keys.left = 0xff51;
keys.up = 0xff52;
keys.right = 0xff53;
keys.down = 0xff54;
keys.pageup = 0xff55;
keys.pagedown = 0xff56;
keys.end = 0xff57;

// keys only on external
const keysCompatExternal = Object.keys(keys);
keysCompatExternal.push("mute");
keysCompatExternal.push("volumeup");
keysCompatExternal.push("volumedown");

// keys only on x11
keys.hyper_left = 0xffed;
keys.hyper_right = 0xffee;

const keyList = [...new Set(Object.keys(keys).concat(...keysCompatExternal))];

module.exports = {
  keys,
  keysCompatExternal,
  keyList
}
