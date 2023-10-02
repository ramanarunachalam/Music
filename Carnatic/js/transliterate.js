
const HKT_REGEX_LIST = [ [ 'M([cj])', 'J$1' ], [ 'M([kg])', 'G$1' ], [ 'M([TD])', 'N$1' ], [ 'M([tds])', 'n$1' ],
                         [ '\\bjJ', 'J' ], [ 'jJ', 'JJ' ], [ 'Jj', 'Jc' ], [ 'TR', 'RR' ], [ '[\\.]n', 'qqqq' ],
                         [ '[\\.]N', 'QQQQ' ], [ '\\bn', 'QQQQ' ], [ 'nd', 'QQQQd' ], [ 'nt', 'QQQQt' ],
                         [ 'n', '.n' ], [ 'QQQQ', 'n' ], [ 'qqqq', '.n' ]
                       ];
const ENG_REGEX_LIST = [ [ '.N', 'n' ] ];
const DOT_REGEX_LIST = [ [ ' ', ' ' ], [ ',', ',' ], [ '\\.', '.' ], [ '$', '' ] ];

const SUPERSCRIPT_CODES = [ 0x00B2, 0x00B3, 0x2074 ];
const superscript_code_list = new Set(SUPERSCRIPT_CODES.map(i => String.fromCharCode(i)));

const MAP_DOT_DICT = {
    'hindi':    '\\u094D',
    'marathi':  '\\u094D',
    'bengali':  '\\u09CD',
    'gujarati': '\\u0ACD',
    'punjabi':  '\\u0A4D',
    'assamese': '\\u09CD'
};

function lists_to_map(l1, l2) {
    const d = new Map();
    for (let i = 0; i < l1.length; i++) {
        d.set(l1[i], l2[i]);
    }
    return d;
}

function get_freq_map(hkt_freq) {
    const freq_key_list = hkt_freq['key'];
    const freq_value_list = hkt_freq['value'];
    const freq_list = [];
    for (let i = 0; i < freq_value_list.length; i += 1) {
        freq_list.push(freq_value_list[i]);
    }
    const l_map = lists_to_map(freq_key_list, freq_list);
    return l_map;
}

function init_lang_maps(map_data) {
    const hk_tamil_maps = map_data['hk_tamil_maps'];
    const lang_maps = new Map();
    const hk_tamil_list = hk_tamil_maps['hk_tamil'].split(/\s+/);
    for (let lang in hk_tamil_maps) {
       const lang_list = hk_tamil_maps[lang].split(/\s+/);
       const l_map = lists_to_map(hk_tamil_list, lang_list);
       lang_maps.set(lang, l_map);
    }

    const hk_maps = map_data['hk_eng_maps'];
    const e_map = lists_to_map(hk_maps['eng_input'], hk_maps['eng_output']);
    lang_maps.set('hk_eng', e_map);

    const hkt_freq = map_data['frequency']
    lang_maps.set('hk_tamil_freq', get_freq_map(hkt_freq['hk_tamil']));
    lang_maps.set('hk_eng_freq', get_freq_map(hkt_freq['hk_eng']));

    const hk_length = map_data['length'];
    lang_maps.set('hk_tamil_length', hk_length['hk_tamil']);
    lang_maps.set('hk_eng_length', hk_length['hk_eng']);

    window.LANG_MAPS = lang_maps;
}

function set_regex(value_list, prefix) {
    const regex_list = [];
    for (let i = 0; i < value_list.length; i += 1) {
        const value = value_list[i];
        const obj = new RegExp(prefix + value[0], 'gm');
        regex_list.push([ obj, value[1] ]);
    }
    return regex_list;
}

function apply_regex(regex_list, txt) {
    for (let i = 0; i < regex_list.length; i += 1) {
        txt = txt.replace(regex_list[i][0], regex_list[i][1]);
    }
    return txt;
}

/*
     Transliteration
*/

function transliterator_lang_init(lang) {
    const out_lang = lang.toLowerCase();
    if (out_lang === 'tamil')  window.HKT_REGEX_OBJ_LIST = set_regex(HKT_REGEX_LIST, '');
    else  window.HKT_REGEX_OBJ_LIST = set_regex(ENG_REGEX_LIST, '');
    window.DOT_REGEX_OBJ_LIST = set_regex(DOT_REGEX_LIST, MAP_DOT_DICT[out_lang]);

    const lang_map_data = window.LANG_MAPS;
    if (lang_map_data === undefined) return;
    if (out_lang != 'english') {
        window.LANG_TRANS_LIST = [ lang_map_data.get(out_lang),
                                   lang_map_data.get('hk_tamil_length'),
                                   lang_map_data.get('hk_tamil_freq')
                                 ]
    } else {
        window.LANG_TRANS_LIST = [ lang_map_data.get('hk_eng'),
                                   lang_map_data.get('hk_eng_length'),
                                   lang_map_data.get('hk_eng_freq')
                                 ]
    }
}

function get_transliterator_parser_text(data) {
    const [ lang_map, maxlen, pattern ] = window.LANG_TRANS_LIST;
    const tokenlist = [];
    let current = 0;
    while (current < data.length) {
        let p = data[current];
        let j = 1;
        const m = pattern.has(p) ? pattern.get(p) : 0;
        if (m > 1) {
            let nextstr = data.slice(current, current + maxlen)
            for (let k = m; k > 0; k -= 1) {
                const s = nextstr.slice(0, k);
                if (lang_map.has(s)) {
                    p = s;
                    j = k;
                    break
                }
            }
        }
        p = lang_map.has(p) ? lang_map.get(p) : p
        tokenlist.push(p);
        current += j;
    }
    return tokenlist.join('');
}

function get_transliterator_text(out_lang, data) {
    if (window.LANG_MAPS === undefined) return data;
    out_lang = out_lang.toLowerCase();
    let result = apply_regex(window.HKT_REGEX_OBJ_LIST, data);
    result = get_transliterator_parser_text(result);
    if (MAP_DOT_DICT.hasOwnProperty(out_lang)) result = apply_regex(window.DOT_REGEX_OBJ_LIST, result);
    return result;
}

function transliterate_search_init(char_map) {
    const key_list = [];
    let max_len = 0;
    for (let s in char_map) {
        key_list.push(s);
        max_len = Math.max(max_len, s.length);
    }
    const token_set = new Set(key_list);
    window.INDIC_CHAR_MAP = [ char_map, token_set, max_len ];
}

function transliterate_search_text(word) {
    const [ char_map, token_set, maxlen ] = window.INDIC_CHAR_MAP;
    let current = 0;
    const tokenlist = [];
    word = word.toString();
    while (current < word.length) {
        const nextstr = word.slice(current, current+maxlen);
        let p = nextstr[0];
        let j = 1;
        let i = maxlen;
        while (i > 0) {
            let s = nextstr.slice(0, i);
            if (token_set.has(s)) {
                p = s;
                j = i;
                break
            }
            i -= 1;
        }
        if (p in char_map) {
            p = char_map[p];
        }
        tokenlist.push(p);
        current += j;
    }
    let new_word = tokenlist.join('');
    if (word !== new_word) {
        new_word = new_word.replace(/_/g, '');
        new_word = new_word.replace(/G/g, 'n');
        new_word = new_word.replace(/J/g, 'n');
    }
    return new_word;
}

/*
     Language Keyboards
*/

const ROW_SIZE = 9;

function render_keys(lang_dict) {
    const row_list = [];
    const info_list = [];
    let row = [];
    let col_id = 1;
    let j = 0;
    let key_list = [ 'vowel', 'middle' ];
    for (let k = 0; k < key_list.length; k++) {
        let key = key_list[k];
        basic_list = lang_dict[key];
        for (let i = 0; i < basic_list.length; i++) {
            if (j > 0 && (j % ROW_SIZE) === 0) {
                row_list.push({ 'col' : row });
                row = []
            }
            let c = basic_list[i];
            c = c !== '.' ? c : ' ';
            const info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
            row.push(info);
            info_list.push(info);
            col_id += 1;
            j += 1;
        }
    }
    const punctuation_list = lang_dict['special'].concat([ ' ', ':' ]);
    for (let i = 0; i < punctuation_list.length; i++) {
        const c = punctuation_list[i];
        const info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
        if (j > 0 && (j % ROW_SIZE) === 0) {
            row_list.push({ 'col' : row });
            row = []
        }
        row.push(info);
        info_list.push(info);
        col_id += 1;
        j += 1;
    }
    const icon_list = [ 'chevron-expand', 'backspace', 'arrow-return-left' ];
    const key_name_list = [ 'vowel reset', 'backspace', 'enter' ];
    for (let i = 0; i < icon_list.length; i++) {
        const icon = icon_list[i];
        const img_str = `<i class="bi bi-${icon} ICON_FONT" onclick="on_key_click()"></i>`;
        const info = { 'N' : img_str, 'A' : key_name_list[i], 'K' : icon, 'T' : 'icon', 'I' : col_id };
        row.push(info);
        info_list.push(info);
        col_id += 1;
        j += 1;
    }
    let col_span = ((col_id - 1) % ROW_SIZE) + 1;
    if (col_span > 1) {
        row[row.length - 1]['C'] = `colspan="${col_span}"`;
    }
    row_list.push({ 'col' : row });
    row = []
    j = 0;
    key_list = [ 'consonant' ];
    for (let k = 0; k < key_list.length; k++) {
        const key = key_list[k];
        basic_list = lang_dict[key];
        for (let i = 0; i < basic_list.length; i++) {
            if (j > 0 && (j % ROW_SIZE) === 0) {
                row_list.push({ 'col' : row });
                row = []
            }
            let c = basic_list[i];
            c = c !== '.' ? c : ' ';
            const info = { 'N' : c, 'K' : c, 'T' : 'key', 'I' : col_id };
            row.push(info);
            info_list.push(info);
            col_id += 1;
            j += 1;
        }
    }
    row_list.push({ 'col' : row });
    const key_dict = { 'row' : row_list };
    return [info_list, key_dict];
}

function replace_keys(key_dict, vowel_size, key) {
    const combo_list = window.script_combo_list;
    for (let i = 0; i < vowel_size; i++) {
        const c_key = combo_list[i];
        const c = (key === '' || c_key === 0) ? key_dict[i]['N'] : key + c_key;
        const col_id = 'key_' + (i + 1);
        plain_set_html_text(col_id, c);
    }
}

function on_key_click() {
   const lang_dict = window.script_lang_dict;
   let text = document.getElementById('SEARCH_WORD').value;
   let element = event.srcElement;
   if (element.tagName === 'I') {
       event.stopPropagation();
       element = element.parentElement;
   }
   const id = element.getAttribute('id');
   const nid = parseInt(id.replace(/key_/, ''));
   const c = element.innerHTML;
   const s = c[0];
   const f = c.charCodeAt(0);
   let r_key;
   // console.log(`c ${c} f ${f} id ${id} nid ${nid}`);
   if (id === lang_dict['vowel reset']) {
       r_key = '';
   } else if (id === lang_dict['backspace']) {
       if (text.length > 0) {
           text = text.slice(0, text.length - 1);
       }
   } else if (id === lang_dict['enter']) {
       load_search_data();
   } else if (lang_dict['consonant'].includes(s) || lang_dict['middle'].includes(s)) {
       const pos = c.length - 1;
       r_key = c;
       const l = text[text.length - pos];
       if (l !== undefined && l.charCodeAt(0) === f) {
           const p = text.length - 1;
           if (superscript_code_list.has(text[p])) {
               text = text.slice(0, p) + c[pos - 1] + c[pos];
           } else {
               text += c[pos];
           }
           r_key = '';
       } else {
           if (nid <= lang_dict['vowels'] || c.length > 3) {
               r_key = '';
           }
           text += c;
       }
   } else {
       text += c;
   }
   if (r_key !== undefined) {
       replace_keys(window.input_key_dict, window.script_vowel_size, r_key);
   }
   document.getElementById('SEARCH_WORD').value = text;
   load_search_data();
};

function set_input_keyboard(kbd_dict) {
    const base = kbd_dict['base'];
    if (typeof base === 'string') kbd_dict['base'] = parseInt(base, 16);
    window.script_lang_dict = kbd_dict;
    window.script_combo_list = kbd_dict['glyph'];
    window.script_vowel_size = kbd_dict['glyph'].length;
    const [info_list, key_dict] = render_keys(kbd_dict);
    for (let i = 0; i < info_list.length; i++) {
        const info_dict = info_list[i];
        const key_name = info_dict['A'];
        if (key_name !== undefined) {
            kbd_dict[key_name] = 'key_' + info_dict['I'];
        }
    } 
    window.input_key_dict = info_list;
    render_card_template('lang-key-template', 'GENKBD', key_dict);
}


