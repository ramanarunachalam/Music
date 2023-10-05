const LANG_PARAMS =[ 'English', 'English' ];
const DEFAULT_VIDEO_ID    = "_tdYY6lUw9g"; 
const DEFAULT_YOUTUBE_URL = `https://www.youtube.com/embed/${DEFAULT_VIDEO_ID}?enablejsapi=1`;
const HISTORY_TITLE = 'Hindusthani';

const SEARCH_TOOLTIP = 'Prefix Search <br/> e.g. malhar kamod <br/> Phonetic Search <br/> e.g. kanada <br/> Language Search <br/> e.g. यमन <br/> Context Search <br/> e.g. bhimsen : pag : malkauns';
const MIC_TOOLTIP = 'Only in Chrome';
const KBD_TOOLTIP = 'Language Keyboard';

const VIDEO_INFO_KEY_LIST = new Set([ 'title', 'author_name' ]);
const CC = [ 'I', 'R', 'D', 'V' ];
const OF = [ 'F', 'S', 'T' ];
const FF = { 'artist'   : [ 'song',   'S', [ 'T', 'R', 'C' ], [ 'type', 'raga',   'composer' ] ],
             'composer' : [ 'song',   'S', [ 'T', 'R', 'A' ], [ 'type', 'raga',   'artist'   ] ],
             'raga'     : [ 'song',   'S', [ 'T', 'A', 'C' ], [ 'type', 'artist', 'composer' ] ],
             'type'     : [ 'song',   'S', [ 'R', 'A', 'C' ], [ 'raga', 'artist', 'composer' ] ],
             'song'     : [ 'artist', 'A', [ 'T', 'R', 'C' ], [ 'type', 'raga',   'composer' ] ]
           };

const CATEGORY_DICT = { 'categories' : [ { 'C' : 'raga',     'I' : 'music-note-list',   'N' : 'Raga'     },
                                         { 'C' : 'artist',   'I' : 'person-fill',       'N' : 'Artist'   },
                                         { 'C' : 'composer', 'I' : 'person-lines-fill', 'N' : 'Composer' },
                                         { 'C' : 'type',     'I' : 'tag',               'N' : 'Type'     },
                                         { 'C' : 'song',     'I' : 'music-note-beamed', 'N' : 'Song'     },
                                         { 'C' : 'about',    'I' : 'info-circle',       'N' : 'About'    },
                                       ]
                      };

const START_NAV_CATEGORY = 'raga';
const [ C_PLURAL, C_SINGLE ]   = [ 'songs', 'song' ];
const [ CC_PLURAL, CC_SINGLE ] = [ 'Songs', 'Song' ];

const LINK_ACTIVE_BUTTON = 2;

const KEY_NAME_LIST   = [ 'Melakartha', 'Thaat', 'God' ];
const MENU_ICON_DICT = {};

const SEARCH_MAP_DICT = { 'c' : 's', 'p' : 'b' };
const IMAGE_MAP       = { 'm'  : 'maxresdefault.jpg',
                          'm2' : 'maxres2.jpg',
                          'h'  : 'hqdefault.jpg',
                          'h2' : 'hq2.jpg',
                          's2' : 'sd2.jpg',
                          's'  : 'sddefault.jpg',
                          'sw' : 'sddefault.webp',
                          'sl' : 'sddefault_live.jpg'
                        };

PLAYLIST_PENDING_MSG  = [ `${CC_SINGLE} added to Play List`, `Click Play List to Add/Delete ${CC_PLURAL}` ];
VIEW_IN_LANDSCAPE_MSG = [ 'Best Viewed in Landscape Mode', 'Use Landscape Mode' ];
VIDEO_NOT_PLAYING_MSG = [ 'Video is not playable', 'Click Play List to Delete Song' ];


function sleep(seconds){
    const waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

function capitalize_word(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function get_yt_image(image) {
    return `https://i.ytimg.com/vi/${image}.jpg`;
}

async function fetch_url(url) {
    let url_data = null;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log('Fetch Error:', response.status);
        }
        url_data = await response.json();
    } catch(error) {
        console.log('Fetch Error:', error, url);
    }
    return url_data;
}

function get_bs_modal(id) {
    return new bootstrap.Modal(document.getElementById(id));
}

function plain_get_html_text(id) {
    return document.getElementById(id).innerHTML;
}

function plain_set_html_text(id, text) {
    document.getElementById(id).innerHTML = text;
}

function plain_add_class(id, name) {
    const element = document.getElementById(id);
    element.classList.add(name);
}

function plain_remove_class(id, name) {
    const element = document.getElementById(id);
    element.classList.remove(name);
}

function plain_get_attr(id, key) {
    const element = document.getElementById(id);
    return element.getAttribute(key);
}

function plain_set_attr(id, key, value) {
    const element = document.getElementById(id);
    element.setAttribute(key, value);
}

function plain_get_background_color(id) {
    const element = document.getElementById(id);
    return element.style.backgroundColor;
}

function plain_set_background_color(id, value) {
    let element = document.getElementById(id);
    element.style.backgroundColor = value;
}

function plain_get_query_selector(phrase) {
    return document.querySelectorAll(phrase);
}

function call_modal_dialog(title) {
    plain_set_html_text('DIALOG_TITLE', title);
    get_bs_modal('DIALOG_BOX').show();
}

function show_modal_dialog(title, body) {
    plain_set_html_text('DIALOG_BODY', body);
    call_modal_dialog(title);
    setTimeout(function() { get_bs_modal('DIALOG_BOX').hide(); }, 3000);
}

function render_card_template(template_name, id, data) {
    const ul_template = plain_get_html_text(template_name);
    const template_html = (data !== undefined) ? Mustache.render(ul_template, data) : ul_template;
    plain_set_html_text(id, template_html);
}

function render_modal_dialog(title, template, data) {
    render_card_template(template, 'DIALOG_BODY', data);
    call_modal_dialog(title);
}

function onYouTubeIframeAPIReady() {
    window.yt_player = new YT.Player('FRAME_PLAYER', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('FRAME_PLAYER').style.borderColor = '#FF6D00';
}

last_player_status = 0;
function onPlayerStateChange(event) {
    const player_status = event.data;
    // playerStatus: -1 : unstarted, 0 - ended, 1 - playing, 2 - paused, 3 - buffering, 5 - video cued
    if (last_player_status === 3 && player_status === -1) {
        // show_modal_dialog(...VIDEO_NOT_PLAYING_MSG);
    }
    if (player_status === 0) play_next();
    // console.log(`Player Status ${player_status} last: ${last_player_status}`);
    last_player_status = player_status;
}

function youtube_player_init() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function get_play_list() {
    let new_play_list = sessionStorage['playlist'];
    new_play_list = (new_play_list === undefined) ? [] : JSON.parse(new_play_list);
    return new_play_list;
}

function play_first() {
    const play_list = get_play_list();
    if (play_list.length <= 0) return;
    const parts = play_list[0].split(':');
    const video_id = parts[0];
    const v_list = video_id.split('&');
    let time_option = { videoId: v_list[0] };
    if (v_list.length >= 2) {
        time_option['startSeconds'] = parseInt(v_list[1].replace('start=', ''));
    }
    if (v_list.length >= 3) {
        time_option['endSeconds'] = parseInt(v_list[2].replace('end=', ''));
    }
    window.yt_player.loadVideoById(time_option);
}

function play_next() {
    const play_list = get_play_list();
    play_list.shift();
    sessionStorage['playlist'] = JSON.stringify(play_list);
    play_first();
}

function on_storage_event(storageEvent) {
    const play_list = get_play_list();
    if (play_list.length === 0) return;
    if (play_list.length > 1) {
        show_modal_dialog(...PLAYLIST_PENDING_MSG)
        return;
    }
    play_first();
}

function get_lang_text(name, category, h_id) {
    const category_data = window.LANG_DATA[name][category];
    return category_data[h_id];
}

function get_phonetic_text(category, h_id) {
    return get_lang_text('phonetic', category.toLowerCase(), h_id);
}

function get_map_text(category, name) {
    return get_lang_text('map', category, name);
}

function get_month_text(value) {
    if (typeof value !== 'string') return '';
    if (!value.includes(' ')) return '';
    const m_list = value.split(' ');
    if (m_list.length != 3) return '';
    const [ d, m, y ] = m_list;
    const month = get_map_text('month', m);
    if (month === undefined) return '';
    return `${d} ${month} ${y}`;
}

function load_menu_data(lang, nav_category) {
    transliterator_lang_init(lang);

    const item_list = CATEGORY_DICT['categories'];
    for (const obj of item_list) {
        const name = capitalize_word(obj['C']);
        obj['N'] = get_map_text('info', name);
    }
    const playlist = get_map_text('info', 'Playlist');
    const search = get_map_text('info', 'Search');
    const lang_map_dict = window.LANG_DATA['map']['language'];
    const lang_list = [];
    for (let l in lang_map_dict) {
        let d = (l === window.GOT_LANGUAGE) ? { 'N' : l, 'O' : 'selected' } : { 'N' : l };
        lang_list.push(d);
    }
    const menu_dict = { 'menus' : { 'LANGUAGE' : window.GOT_LANGUAGE, 'languages' : lang_list,
                                    'S' : search, 'APP' : 'Android App', 'P' : playlist,
                                    'B' : 'Brightness', 'BI' : 'brightness-high-fill',
                                    'STP' : SEARCH_TOOLTIP, 'MTP' : MIC_TOOLTIP, 'KTP' : KBD_TOOLTIP,
                                    'categories' : CATEGORY_DICT['categories'] }
                      };
    render_card_template('page-menu-template', 'MENU_DATA', menu_dict);
    init_search_listener();

    set_link_initial_active_state()

    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });
    speech_to_text_init();

    load_nav_data(nav_category);
}

function get_swara_transliterate(lang, swara_str) {
    if (lang !== 'English') {
        swara_str = swara_str.replace(/da/g, 'dha');
    }
    swara_str = transliterate_hk_to_lang(lang, swara_str);
    swara_str = swara_str.replace(/([123])/g, '<sub>$1</sub>');
    return swara_str;
}

function get_swara_text(lang, note_list, value_list) {
    let swara_str = value_list[0];
    const s_list = swara_str.split(' ');
    for (const swara of s_list) {
        note_list.add(swara);
    }
    swara_str = get_swara_transliterate(lang, swara_str);
    const note_str = value_list[1];
    const note_template = plain_get_html_text('page-note-template');
    const note_html = Mustache.render(note_template, { 'note' : note_str });
    return swara_str + ' ' + note_html;
}

function info_transliteration(category, data_list) {
    const lang = window.RENDER_LANGUAGE;
    let item = data_list['title']
    const h_text = item['H'];
    if (category === 'about') {
        item['N'] = get_map_text('info', item['N']);
    } else {
        item['N'] = get_phonetic_text(category, item['T']);
    }
    let item_list = data_list['stats']
    if (item_list === undefined) item_list = [];
    for (const obj of item_list) {
        obj['N'] = get_map_text('info', obj['H']);
    }
    const note_list = new Set();
    item_list = data_list['info']
    if (item_list === undefined) item_list = [];
    for (const obj of item_list) {
        const name = obj['H'];
        obj['N'] = get_map_text('info', name);
        let value = obj['V'];
        if (name === 'Language') {
            obj['V'] = get_map_text('info', value);
        } else if (KEY_NAME_LIST.includes(name)) {
            obj['V'] = transliterate_hk_to_lang(lang, value);
        } else if (name === 'Arohana' || name === 'Avarohana') {
            obj['V'] = get_swara_text(lang, note_list, value)
        } else if (name === 'Born' || name === 'Died') {
            const v = get_month_text(value);
            if (v !== '') obj['V'] = v;
        } else if (lang !== 'English' && name === 'Gharana') {
            const item_list = obj['P'];
            if (value !== undefined) {
                let g_list = [];
                for (const gobj of item_list) {
                     g_list.push(transliterate_hk_to_lang(lang, gobj));
                }
                obj['V'] = g_list.join('</br>');
            }
        } else if (lang !== 'English') {
            value = obj['P'];
            if (value !== undefined) obj['V'] = transliterate_hk_to_lang(lang, value);
        }
    }
    item = data_list['keyboard']
    if (item !== undefined) {
        const kbd_list = window.LANG_DATA['map']['piano'];
        for (const obj of kbd_list) {
            const swara_list = obj['V'];
            const new_swara_list = [];
            for (const swara_str of swara_list) {
                if (note_list.has(swara_str)) {
                    const new_swara_str = get_swara_transliterate(lang, swara_str);
                    new_swara_list.push(new_swara_str);
                }
            }
            obj['N'] = '&nbsp;' + new_swara_list.join('<br>&nbsp;');
        }
        data_list['keyboard'] = { 'keys' : kbd_list };
    }
    item_list = data_list['lyricstext']
    if (item_list === undefined) item_list = [];
    const lyric_prefix = 'SAhityA';
    const prefix = transliterate_hk_to_lang(lang, lyric_prefix);
    for (const obj of item_list) {
        const lyric_lang = get_map_text('info', obj['L']);
        obj['L'] = prefix + ' - ' + lyric_lang;
    }
    const references = get_map_text('info', 'References');
    item_list = data_list['lyricsref']
    if (item_list === undefined) item_list = [];
    for (const obj of item_list) {
        obj['R'] = references;
    }
}

async function set_language(got_lang, name_lang) {
    window.GOT_LANGUAGE = got_lang;
    const lang_map_dict = window.LANG_DATA['map']['language'];
    const lang = lang_map_dict[got_lang];
    window.RENDER_LANGUAGE = lang;
    const history_data = window.history_data;
    // console.log(`SET LANG: ${lang} ${got_lang} ${history_data}`);
    const l_lang = lang.toLowerCase();
    await fetch_url_data('LANG DATA', `${l_lang}_map.json`);
    load_menu_data(lang, window.NAV_CATEGORY);
    if (history_data === undefined) {
        load_content_data(window.CONTENT_CATGEGORY, window.CONTENT_NAME);
    } else  {
        handle_history_context(history_data);
    }
}

function toggle_icon(id, old_class, new_class) {
    plain_remove_class(id, old_class);
    plain_add_class(id, new_class);
}

function toggle_brightness() {
    window.COLOR_SCHEME = (window.COLOR_SCHEME === 'dark') ? 'light' : 'dark';
    const elements = document.getElementsByTagName('html');
    elements[0].setAttribute('data-bs-theme', window.COLOR_SCHEME);
    if (window.COLOR_SCHEME === 'dark') toggle_icon('BRIGHTNESS', 'bi-moon-fill', 'bi-brightness-high-fill');
    else toggle_icon('BRIGHTNESS', 'bi-brightness-high-fill', 'bi-moon-fill');
}

function add_video(audio_file, script_mode) {
    const play_list = get_play_list();
    if (play_list.length <= 0) {
        if (audio_file !== '') play_list[0] = audio_file;
    } else {
        play_list[play_list.length] = audio_file;
    }
    sessionStorage['playlist'] = JSON.stringify(play_list);
    if (play_list.length === 1) {
        play_first();
    } else  if (!script_mode) {
        show_modal_dialog(...PLAYLIST_PENDING_MSG)
    }
}

function delete_video(video_id) {
    const play_list = get_play_list();
    if (play_list.length > 0) {
        video_id = parseInt(video_id);
        play_list.splice(video_id, 1);
        sessionStorage['playlist'] = JSON.stringify(play_list);
        if (video_id === 0) play_first();
    }
}

function delete_row(row) {
    const row_id = row.parentNode.parentNode.rowIndex;
    handle_playlist_command('delete', row_id - 1);
    document.getElementById('PLAYLIST_TABLE').deleteRow(row_id);
}

function create_jukebox(value) {
    setTimeout(function() { create_jukebox_modal(value); }, 0);
}

function get_random_item(i_list) {
    const i = Math.floor((Math.random() * i_list.length));
    return i_list[i];
}

async function create_jukebox_modal(value) {
    const lang = window.RENDER_LANGUAGE;
    const option = value.toLowerCase();
    const check_id = window.NAV_CATEGORY === window.CONTENT_CATGEGORY;
    get_bs_modal('DIALOG_BOX').hide();
    const JUKEBOX_TOTAL = 100;
    const JUKEBOX_LENGTH = 10;
    let category = 'song';
    let loops = JUKEBOX_TOTAL;
    if (FF[option] !== undefined) {
        category = option;
        loops = 1;
    }
    let url = `${category}.json`;
    let url_data = await fetch_url(url);
    if (url_data === null) return;
    const id_list = new Set();
    const letter_dict = url_data['letters'][lang.toLowerCase()];
    const letter_list = Object.keys(letter_dict);
    const play_list = [];
    for (let i = 0; i < loops; i++) {
        let t_id = 0;
        let t_name = '';
        if (loops <= 1) {
            t_name = window.CONTENT_NAME;
        } else {
            const letter = get_random_item(letter_list);
            const letter_id_list = letter_dict[letter].split(',');
            const t_id = +get_random_item(letter_id_list);
            t_name = window.ID_DATA[category][t_id][0];
            // console.log(`Jukebox: ${url} ${category} ${letter} ${t_id} ${t_name}`);
        }
        url = `${category}/${t_name}.json`;
        url_data = await fetch_url(url);
        if (url_data === null) continue;
        const video_list = url_data['songs'];
        const folder_list = url_data['folders'];
        let count = 0;
        const count_max = Math.min(JUKEBOX_LENGTH, folder_list.length);
        // console.log(`Jukebox: ${url} ${category} ${folder_list.length} ${count_max}`);
        while (count < count_max) {
            const folder = get_random_item(folder_list);
            const [ s_category, s_id, video_ids ] = folder;
            const video_id_list = video_ids.split(',');
            const video_id = +get_random_item(video_id_list);
            const video = video_list[video_id];
            // console.log(`Jukebox folder: ${video_id} ${video_list.length}`);
            if (true) {
                if (option === 'views' && video['V'] < 100) break;
                const song_id = video['S'];
                const artist_id = video['A'];
                // console.log(`Jukebox video: ${song_id} ${k} ${artist_id}`);
                if (loops > 1 && category !== 'artist' && (artist_id <= 0 || artist_id >= 50)) break;
                const raga_id = video['R'];
                // console.log(`Jukebox video: ${song_id} ${k} ${artist_id} ${raga_id}`);
                if (category !== 'raga' && (raga_id <= 0 || raga_id > 250)) break;
                const composer_id = video['C'];
                // if (category !== 'composer' && (composer_id <= 0 || composer_id > 100)) break;
                const video_id = video['I'];
                if (id_list.has(video_id)) break;
                id_list.add(video_id);
                // console.log(`Jukebox video: ${song_id} ${artist_id} ${raga_id} ${composer_id} ${video_id}`);
                const args = `${video_id}:${song_id}:${raga_id}`;
                play_list.push(args);
                if (play_list.length >= JUKEBOX_LENGTH) break;
            }
            if (play_list.length >= JUKEBOX_LENGTH) break;
            count++;
            // console.log('Counting ...', t_id, t_name, play_list.length);
            if (loops > 1) break;
        }
        if (play_list.length >= JUKEBOX_LENGTH) break;
        // console.log('Looping ...');
    }
    // console.log('Playing ...', play_list.length);
    for (const obj of play_list) {
        add_video(obj, true);
    }
    setTimeout(function() { show_playlist(); }, 0);
}

function show_playlist() {
    const play_list = get_play_list();
    const info_list = [];
    for (const [i, video] of play_list.entries()) {
        const parts = video.split(':');
        info_dict = { 'N' : i + 1, 'I' : parts[0], 'S' : parseInt(parts[1]), 'R' : parseInt(parts[2]) };
        get_folder_value('song', info_dict, 'S', 'S');
        get_folder_value('raga', info_dict, 'R', 'R');
        info_list.push(info_dict);
    }
    const lang = window.RENDER_LANGUAGE;
    let header_dict = { 'N' : 'No.', 'I' : 'ID', 'SN' : 'Song', 'RN' : 'Raga' };
    let title = 'Playlist';
    if (lang !== 'English') {
        title = get_map_text('info', title);
        header_dict = { 'N' : 'No.', 'I' : 'ID', 'SN' : get_map_text('info', 'Song'), 'RN' : get_map_text('info', 'Raga') };
    }
    title = '';
    const title_template = plain_get_html_text('modal-playlist-title-template');
    const JUKEBOX_LIST = [ { 'N' : 'Popularity' }, { 'N' : 'Views' }, { 'N' : 'Artist' }, { 'N' : 'Composer' },
                           { 'N' : 'Raga' }, { 'N' : 'Song' }, { 'N' : 'Type' }
                         ];
    const template_html = Mustache.render(title_template, { 'jukebox' : JUKEBOX_LIST });
    title = '<div class="row"><div class="col">' + title + '</div>' + template_html + ' </div>';
    const header_list = [ header_dict ];
    const list_data = { 'playlist' : { 'header' : header_list, 'videos' : info_list } };
    render_modal_dialog(title, 'modal-playlist-template', list_data)
}

function handle_playlist_command(cmd, arg) {
    if (cmd === 'play') {
        add_video(arg, false);
    } else if (cmd === 'delete') {
        delete_video(arg);
    } else if (cmd === 'show') {
        show_playlist();
    }
    return true;
}

function check_need_poster(category) {
     return category === 'artist' || category === 'composer';
}

function render_nav_template(category, data) {
    const lang = window.RENDER_LANGUAGE;
    const id_data = window.ID_DATA[category];
    const poster_data = window.ABOUT_DATA[category];
    const need_poster = check_need_poster(category);
    const icon = MENU_ICON_DICT[category];
    const letter_dict = data['letters'][lang.toLowerCase()];
    // console.log(lang, category, letter_dict);
    const new_alphabet_list = [];
    for (let letter in letter_dict) {
        const new_letter_dict = { LL: letter, LU: letter.toUpperCase(), T: category, I: icon };
        const id_list = letter_dict[letter].split(',');
        const item_list = [];
        for (const h_id of id_list) {
            let [h_text, f_text] = id_data[h_id];
            const n_text = get_phonetic_text(category, h_id);
            const item = { H: h_text, N: n_text };
            if (need_poster) {
                const image_name = poster_data[h_id]
                if (image_name !== undefined) {
                    item['J'] = `Images/${image_name}.jpg`;
                }
            }
            item_list.push(item);
        }
        new_letter_dict['items'] = item_list;
        new_alphabet_list.push(new_letter_dict);
    }
    const new_data = { alphabet: new_alphabet_list };
    const ul_template = plain_get_html_text('nav-data-template')
    const template_html = Mustache.render(ul_template, new_data);
    plain_set_html_text('MENU', template_html);
    if (window.NAV_SCROLL_SP !== null && window.NAV_SCROLL_SP !== undefined) {
        window.NAV_SCROLL_SP.refresh();
    } else {
        const scroll_element = document.getElementById('ALPHABET_DATA');
        window.NAV_SCROLL_SPY = new bootstrap.ScrollSpy(scroll_element, { target: '#ALPHABET_LIST' });
        const scrollspy = document.querySelector('[data-bs-spy="scroll"]')
        scrollspy.addEventListener('activate.bs.scrollspy', (e) => {
            const a_list = plain_get_query_selector('a');
        })
    }
}

function load_about_data(category, video_data) {
    info_transliteration(category, video_data);
    render_card_template('page-title-template', 'PAGE_TITLE', video_data);
    render_card_template('page-about-template', 'PAGE_INFO', video_data);
    render_data_template('', '', video_data);
}

function load_nav_fetch_data(category, url_data) {
    if (category === 'about') {
        load_about_data(category, url_data);
    } else {
        render_nav_template(category, url_data);
    }
    add_history('nav', { 'category' : category });
}

function set_link_initial_active_state() {
    const a_list = plain_get_query_selector('#MENU_DATA li a');
    const a_node = a_list[LINK_ACTIVE_BUTTON].parentNode;
    window.ACTIVE_MENU = a_node;
    a_node.classList.add('active');
}

function clear_link_active_state(prev_element) {
    if (prev_element !== null) prev_element.classList.remove('active');
    return null;
}

function set_link_active_state(element, prev_element) {
    clear_link_active_state(prev_element);
    element = element.parentNode;
    element.classList.add('active');
    return element;
}

function get_folder_value(category, info, prefix, v) {
    const lang = window.RENDER_LANGUAGE;
    const id_data = window.ID_DATA[category];
    const h_name = prefix + 'D';
    const h_id = info[v];
    const [ h_text, f_text ] = id_data[h_id];
    const n_text = get_phonetic_text(category, h_id);
    const f_name = prefix + 'N';
    info[h_name] = h_text;
    info[f_name] = n_text;
}

function get_match_count(f_category, f_value, context_list, c_len) {
    let found = 0;
    for (let c = 1; c < c_len; c++) {
        if (context_list[c][0] === f_category && context_list[c][2] === f_value) found += 1;
    }
    return found;
}

function translate_song_id_to_data(category, sd, st, song_list) {
    const HF = [ 'S', 'R', 'C' ];
    const HCATEGORY = [ 'song', 'raga', 'composer' ];
    for (const [i, song] of song_list.entries()) {
        for (const v of HF) {
            get_folder_value(HCATEGORY[m], song, v, v);
        }
        song['I'] = i + 1;
    }
}

function translate_folder_id_to_data(category, id, data) {
    const lang = window.RENDER_LANGUAGE.toLowerCase();
    const ff = FF[category];
    const f_category = ff[0];
    const f_type = ff[1];
    const sd = ff[2];
    const st = ff[3];
    const video_list = data[C_PLURAL];
    const folder_list = data['folders'];
    const folder_ids = data['languages'][lang];
    const fold_id_list = folder_ids.split(',');
    const new_folder_list = [];
    for (const f_id of fold_id_list) {
        const folder = folder_list[+f_id];
        const [ v_category, v_id, video_ids ] = folder;
        const video_id_list = video_ids.split(',');
        const new_folder = { HT: f_category, HC: video_id_list.length };
        new_folder[f_type] = v_id;
        get_folder_value(f_category, new_folder, 'H', f_type);
        const new_video_list = [];
        let p_video_ids = (category !== C_SINGLE) ? folder['S'] : '';
        for (const video_id of video_id_list) {
            const video = video_list[+video_id];
            for (let m = 0; m < OF.length; m++) {
                const c = OF[m] + 'T';
                video[c] = st[m];
                get_folder_value(st[m], video, OF[m], sd[m]);
            }
            if (category === C_SINGLE) p_video_ids = video['S'];
            video['PS'] = p_video_ids;
            video['PR'] = video['R'];
            const imageId = video['I'].split('&')[0];
            const path = IMAGE_MAP[video['J']] ?? 'maxdefault.jpg';
            video['Y'] = `${imageId}/${path}`;
            new_video_list.push(video);
        }
        new_folder[C_PLURAL] = new_video_list;
        new_folder_list.push(new_folder)
    }
    const new_data = { title: data['title'], videos: [{ folder: new_folder_list }] };
    return new_data;
}

function render_data_template(category, id, data, context_list) {
    const lang = window.RENDER_LANGUAGE;
    if (category === '') {
        plain_set_html_text('PAGE_VIDEOS', '');
        plain_set_html_text('PAGE_LYRICS', '');
        plain_set_html_text('PAGE_REFS', '');
        return;
    }

    const template_name = 'page-videos-template'
    let ul_template = plain_get_html_text(template_name);
    const new_data = translate_folder_id_to_data(category, id, data);

    new_data['VideoName'] = get_map_text('info', 'Videos');
    new_data['ViewName'] = get_map_text('info', 'Views');

    if (context_list !== undefined) {
        const c_len = context_list.length;
        for (const video of new_data['videos']) {
            const new_folder_list = [];
            for (const folder of video['folder']) {
                const f_category = folder['HT'];
                const f_value = folder['HN'];
                const s_found = get_match_count(f_category, f_value, context_list, c_len);
                const video_list = folder[C_PLURAL];
                const new_video_list = [];
                for (const video of video_list) {
                    let found = s_found;
                    for (let m = 0; m < OF.length; m++) {
                        let c = OF[m] + 'T';
                        let f_category = video[c];
                        c = OF[m] + 'N';
                        let f_value = video[c];
                        found += get_match_count(f_category, f_value, context_list, c_len);
                    }
                    if (found >= (c_len - 1)) new_video_list.push(video);
                }
                folder[C_PLURAL] = new_video_list;
                if (new_video_list.length > 0) new_folder_list.push(folder);
            }
            video['folder'] = new_folder_list;
        }
    }

    const template_html = Mustache.render(ul_template, new_data);
    plain_set_html_text(id, template_html);
}

function empty_content_data(category, name) {
    const lang = window.RENDER_LANGUAGE;
    plain_set_html_text('PAGE_TITLE', '');
    render_card_template('page-info-spinner', 'PAGE_INFO', { 'info' : { 'T' : get_map_text('info', 'Fetch') } });
    const empty_data = {};
    render_data_template('', '', empty_data);
    window.scrollTo(0, 0);
}

function render_content_data(category, name, video_data, context_list) {
    info_transliteration(category, video_data);
    render_card_template('page-title-template', 'PAGE_TITLE', video_data);
    setTimeout(function() {
        render_card_template('page-info-template', 'PAGE_INFO', video_data);
        render_data_template(category, 'PAGE_VIDEOS', video_data, context_list);
        render_card_template('page-lyrics-text-template', 'PAGE_LYRICS', video_data);
        render_card_template('page-lyrics-ref-template', 'PAGE_REFS', video_data);
        window.scrollTo(0, 0);
    }, 0);
}

function load_context_search_data(context_list) {
    const [ category, name ] = context_list[0].split(':');
    const new_context_list = [];
    for (const context of context_list) {
        new_context_list.push(context.split(':'));
    }
    load_content_data(category, name, undefined, new_context_list);
}

function normalize_search_text(search_text) {
    search_text = search_text.toLowerCase();
    search_text = search_text.replace(/(e)\1+/g, 'i');
    search_text = search_text.replace(/(o)\1+/g, 'u');
    search_text = search_text.replace(/(.)\1+/g, '$1');
    search_text = search_text.replace(/([bcdfgjklpst])h/g, '$1')
    search_text = search_text.replace(/([sd])v/g, '$1w')
    search_text = search_text.replace(/([ao])u/g, 'ow')
    return search_text;
}

function search_load_fetch_data(search_index_obj) {
    const search_engine = window.indic_search_engine;
    let data_id = 0;
    const search_obj = search_index_obj['Search'];
    for (let category in search_obj) {
        const data_list = search_obj[category];
        data_list.forEach(function (data_item, data_index) {
            const h_id = data_item.H;
            const aka_list = data_item.A.split(',');
            const data_doc = { 'id' : data_id, 'href' : h_id, 'title' : h_id, 'aka' : aka_list, 'category' : category, 'pop' : data_item.P };
            search_engine.add(data_doc);
            data_id += 1;
        });
    }
}

function search_init() {
    window.indic_search_engine = new MiniSearch({
        fields: ['aka'], // fields to index for full-text search
        storeFields: ['title', 'href', 'category', 'pop'] // fields to return with search results
    });
    window.search_initialized = false;
    fetch_url_data('SEARCH DATA', 'search_index.json');
    window.search_initialized = true;
}

function get_search_results(search_word, search_options, item_list, id_list, base_pop) {
    const word_list = search_word.split(' ');
    const new_word_list = [];
    for (let word of word_list) {
        if (word !== '') {
            word = normalize_search_text(word);
            new_word_list.push(word.slice(0,8));
        }
        search_word = new_word_list.join(' ');
    }
    const lang = window.RENDER_LANGUAGE;
    const results = window.indic_search_engine.search(search_word, search_options);
    if (results.length <= 0) return;
    const max_score = results[0].score;
    for (const result_item of results) {
        if (id_list.has(result_item.id)) continue;
        let pop = result_item.pop;
        if (search_word.length > 2) {
            pop = ((400 * result_item.score) / max_score) + (0.6 * pop);
        }
        pop = base_pop + pop;
        const category = result_item.category
        const id_data = window.ID_DATA[category];
        const c_name = capitalize_word(category);
        const n_category = (lang === 'English') ? category.toUpperCase() : get_map_text('info', c_name);
        const href = id_data[result_item.href][0];
        const title = get_phonetic_text(category, result_item.href);
        const item = { 'T' : category, 'C' : n_category, 'I' : MENU_ICON_DICT[category],
                       'H' : href, 'N' : title, 'P' : pop
                     };
        const need_poster = check_need_poster(category);
        if (need_poster) {
            const poster_data = window.ABOUT_DATA[category];
            const image_name = poster_data[result_item.href]
            if (image_name !== undefined) {
                item['J'] = `Images/${image_name}.jpg`;
            }
        }
        item_list.push(item);
        id_list.add(result_item.id);
    }
}

function get_tamil_phonetic_word(word) {
    const w_list = [];
    const new_word = word.toLowerCase();
    for (const c of new_word) {
        w_list.push((c in SEARCH_MAP_DICT) ? SEARCH_MAP_DICT[c] : c);
    }
    return w_list.join('');
}

function load_search_part(search_word, non_english) {
    const s_search_word = search_word.replace(/\s/g, '');
    const item_list = [];
    const id_list = new Set();
    let search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.1 : null };
    get_search_results(search_word, search_options, item_list, id_list, 4000);
    if (search_word !== s_search_word) {
        get_search_results(s_search_word, search_options, item_list, id_list, 1000);
    }
    let n_search_word = '';
    if (non_english) {
        n_search_word = get_tamil_phonetic_word(search_word);
        get_search_results(n_search_word, search_options, item_list, id_list, 5000);
    }
    if (search_word.length > 2) {
        let search_options = { prefix: true, combineWith: 'AND', fuzzy: term => term.length > 3 ? 0.3 : null };
        get_search_results(search_word, search_options, item_list, id_list, 0);
        if (non_english && n_search_word) {
            get_search_results(n_search_word, search_options, item_list, id_list, 0);
        }
        if (search_word !== s_search_word) {
            get_search_results(s_search_word, search_options, item_list, id_list, 0);
        }
    }
    item_list.sort(function (a, b) { return b.P - a.P; });
    const new_item_list = item_list.slice(0, 25);
    return new_item_list;
}

function handle_search_word(search_word) {
    const lang = window.RENDER_LANGUAGE;
    const c = search_word.charCodeAt(0);
    if (c > 127) search_word = transliterate_lang_to_hk(search_word);
    const non_english = (0x0B80 <= c && c <= 0x0BFF) ? true : false;
    const context_list = search_word.split(':');
    const context_dict = {};
    let new_item_list = [];
    for (const word of context_list) {
        new_item_list = load_search_part(word, non_english);
        context_dict[word] = new_item_list;
    }
    const result_title = get_map_text('info', 'Search Results');
    const item_data = { 'title' : { 'N': result_title, 'I': 'search' }, 'items' : new_item_list };
    render_card_template('page-title-template', 'PAGE_TITLE', item_data);
    if (context_list.length <= 1) {
        render_card_template('page-search-template', 'PAGE_INFO', item_data);
    } else {
        const row_list = [];
        for (const [i, w] of context_list.entries()) {
            row_list.push({ 'I' : i, 'col' : context_dict[w] });
        }
        const row_data = { 'items' : row_list };
        render_card_template('page-context-search-template', 'PAGE_INFO', row_data);
    }
    render_data_template('', '', item_data);
    window.scrollTo(0, 0);
    add_history('search', { 'category' : window.NAV_CATEGORY, 'search' : search_word });
}

function load_search_data() {
    window.ACTIVE_NAV = clear_link_active_state(window.ACTIVE_NAV);
    let search_word = document.getElementById('SEARCH_WORD').value;
    search_word = decodeURI(search_word);
    handle_search_word(search_word);
}

function init_search_listener() {
    const element = document.getElementById('SEARCH_WORD');
    element.addEventListener('input', load_search_data);
}

function load_search_history(data) {
    const search_word = data['search'];
    document.getElementById('SEARCH_WORD').value = search_word;
    handle_search_word(search_word);
}

function handle_context_search() {
    const select_list = plain_get_query_selector('select[id^=COL_]');
    const cols = select_list.length;
    const context_list = [];
    for (const select_element of select_list) {
        const option = select_element.options[select_element.selectedIndex].value;
        if (option === '' || option === undefined) continue;
        const new_option = option.replace(/\s/g, '');
        if (new_option === '' || new_option === undefined) continue;
        context_list.push(option);
    }
    load_context_search_data(context_list);
}

function play_ended() {
    const note_list = window.note_play_list;
    const note_index = window.note_play_index;
    const swara = note_list[note_index];
    const note_data = window.LANG_DATA['map']['notes'];
    const note = note_data[swara];
    const key_div = 'note' + note;
    plain_set_background_color(key_div, window.note_key_color);
    window.note_play_index += 1;
    if (window.note_play_index < window.note_play_list.length) {
        play_note();
    }
};

function play_note() {
    const note_list = window.note_play_list;
    const note_index = window.note_play_index;
    const swara = note_list[note_index];
    const note_data = window.LANG_DATA['map']['notes'];
    const note = note_data[swara];
    const key_div = 'note' + note;
    window.note_key_color = plain_get_background_color(key_div);
    plain_set_background_color(key_div, 'cyan');
    const note_audio = document.getElementById('NOTE_PLAY');
    const src = 'audio/' + note + '.mp3';
    note_audio.src = src;
    note_audio.currentTime = 0;
    note_audio.onended = play_ended;
    note_audio.play();
}

function play_notes(notes) {
    window.note_play_list = notes.split(' ');
    window.note_play_index = 0;
    play_note();
}

function render_youtube_video_info(id, video_data) {
    const info_list = [];
    let title = id;
    for (let key in video_data) {
        if (VIDEO_INFO_KEY_LIST.has(key)) {
            const value = video_data[key];
            if (key === 'title') {
                title = value;
            } else {
                info_list.push({ 'N' : key, 'C' : value });
            }
        }
    }
    const video_id = id.split('&')[0];
    info_list.push({ 'N' : 'id', 'C' : video_id });
    const image = video_data['thumbnail_url'];
    const info_data = { 'videoinfo' : info_list, 'videoimage' : { 'I' : video_id, 'P' : image } };
    /*
    const chapter_data = window.CONCERT_DATA[video_id];
    if (chapter_data !== undefined) {
        const category = 'artist';
        const ff = FF[category];
        const sd = ff[2];
        const st = ff[3];
        translate_song_id_to_data(category, sd, st, chapter_data);
        info_data['chapters'] = { 'songs' : window.CONCERT_DATA[video_id] };
    }
    */
    render_modal_dialog(title, 'modal-videoinfo-template', info_data);
}

function get_youtube_video_info(id) {
    const url = `https://www.youtube.com/oembed?url=http://www.youtube.com/watch?v=${id}&format=json`
    fetch_url_data('VIDEO INFO', url, [ id ]);
}

function load_nav_data(category, element) {
    if (category !== 'about') window.NAV_CATEGORY = category;
    if (element !== undefined && category !== 'about') {
        window.ACTIVE_MENU = set_link_active_state(element, window.ACTIVE_MENU);
    }
    const url = `${category}.json`;
    fetch_url_data('NAV DATA', url, [ category ]);
}

function load_content_data(category, name, element, new_context_list) {
    if (element !== undefined) {
        window.ACTIVE_NAV = set_link_active_state(element, window.ACTIVE_NAV);
    }
    window.CONTENT_CATGEGORY = category;
    window.CONTENT_NAME = name;
    empty_content_data(category, name);
    const url = `${category}/${name}.json`;
    fetch_url_data('CONTENT DATA', url, [ category, name, new_context_list ]);
}

function load_init_data(data_set_list) {
    const lang = window.RENDER_LANGUAGE;
    const [ id_data, about_data, lang_data ] = data_set_list;
    if (window.innerWidth < 992) {
        show_modal_dialog(...VIEW_IN_LANDSCAPE_MSG)
    }
    window.ID_DATA = id_data;
    window.ABOUT_DATA = about_data;
    window.LANG_DATA = lang_data;
    load_menu_data(lang, START_NAV_CATEGORY);
    if (window.default_video !== '') load_content_data(C_SINGLE, window.default_video);
    search_init();
}

async function fetch_url_data(name, url, args) {
    const url_data = await fetch_url(url);
    if (url_data === null) return null;
    if (name === 'NAV DATA') {
        const category = args[0];
        load_nav_fetch_data(category, url_data);
    } else if (name === 'LANG DATA') {
        window.LANG_DATA = url_data;
    } else if (name === 'CONTENT DATA') {
        const [ category, h_name, new_context_list ] = args;
        render_content_data(category, h_name, url_data, new_context_list);
        if (new_context_list === undefined) {
            add_history('content', { 'category' : category, 'name' : h_name });
        }
    } else if (name === 'SEARCH DATA') {
        search_load_fetch_data(url_data);
    } else if (name === 'VIDEO INFO') {
        const id = args[0];
        render_youtube_video_info(id, url_data);
    } else if (name === 'CONCERT DATA') {
        window.CONCERT_DATA = url_data;
    }
    return url_data;
}

/*
    Speech To Text
*/

function speech_to_text_init() {
    window.speech_recognizing = false;
    window.speech_final_transcript = '';
    window.speech_recognizing = false;
    window.speech_ignore_onend;
    window.speech_start_timestamp;
    if (!('webkitSpeechRecognition' in window)) {
        console.log('Speech not working:');
    } else {
        window.speech_recognition = new webkitSpeechRecognition();
        window.speech_recognition.continuous = true;
        window.speech_recognition.interimResults = true;

        window.speech_recognition.onstart = function() {
            window.speech_recognizing = true;
            console.log('Speech Starting:');
        };

        window.speech_recognition.onerror = function(event) {
            if (event.error === 'no-speech') {
                console.log('Speech Error: No Speech');
                window.speech_ignore_onend = true;
            }
            if (event.error === 'audio-capture') {
                console.log('Speech Error: Audio Capture');
              window.speech_ignore_onend = true;
            }
            if (event.error === 'not-allowed') {
                if (event.timeStamp - window.speech_start_timestamp < 100) {
                    console.log('Speech Error: Info Blocked');
                } else {
                    console.log('Speech Error: Info Denied');
                }
                window.speech_ignore_onend = true;
            }
        };

        window.speech_recognition.onend = function() {
            window.speech_recognizing = false;
            if (window.speech_ignore_onend) {
                console.log('Speech Error: Ignore End');
                return;
            }
            if (!window.speech_final_transcript) {
                console.log('Speech End:');
                return;
            }
        };

        window.speech_recognition.onresult = function(event) {
            let interim_transcript = '';
            /*
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    window.speech_final_transcript += event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
                console.log('Speech Interim: ' + event.resultIndex + ' ' + event.results.length + ' ' + event.results[i][0].transcript);
            }
            console.log('Speech Result: ' + event.resultIndex + ' ' + event.results.length + ' ' + interim_transcript);
            */
            if (event.results.length > 0) {
                window.speech_final_transcript = event.results[0][0].transcript;
            } else {
                window.speech_final_transcript = '';
            }
            if (window.speech_final_transcript || interim_transcript) {
                window.speech_recognition.stop();
                toggle_icon('MIC_IMAGE', 'mic', 'mic-mute');
                document.getElementById('SEARCH_WORD').value = window.speech_final_transcript;
                // console.log('Speech Final: ' + window.speech_final_transcript);
                load_search_data();
            }
        };
    }
}

function speech_start(event) {
    if (!('webkitSpeechRecognition' in window)) return;
    if (window.speech_recognizing) {
        window.speech_recognition.stop();
        return;
    }
    const lang = window.RENDER_LANGUAGE;
    const iso_lang = window.LANG_DATA['map']['iso'][lang];
    window.speech_final_transcript = '';
    window.speech_recognition.lang = iso_lang;
    window.speech_recognition.start();
    window.speech_ignore_onend = false;
    window.speech_start_timestamp = event.timeStamp;
    toggle_icon('MIC_IMAGE', 'mic-mute', 'mic');
}

function load_keyboard(event) {
    set_input_keyboard(window.LANG_DATA['map']['keyboard']);
    get_bs_modal('LANG_KBD').show();
}

function handle_history_context(data) {
    const context = data['context'];
    if (context === 'content') {
        load_content_data(data['category'], data['name']);
    } else if (context === 'nav') {
        load_nav_data(data['category']);
    } else if (context === 'search') {
        load_search_history(data);
    }
}

function handle_popstate(e) {
    const data = e.state;
    if (data === null || data === undefined) return;
    // console.log('POP: ', e);
    window.indic_popstate = true;
    handle_history_context(data);
    const lang = data['language'];
    // set_language({ 'value' : lang });
}

function add_history(context, data) {
    const url = window.collection_name + '.html';
    data['language'] = window.GOT_LANGUAGE;
    if (!window.indic_popstate) {
        data['context'] = context;
        const c_name = capitalize_word(data['category']);
        let title = `${HISTORY_TITLE}: ${c_name}`;
        const name = data['name'];
        if (name !== undefined) title += ' ' + name;
        // console.log('PUSH: ', data, window.indic_popstate);
        history.pushState(data, title, url);
    }
    window.history_data = data;
    window.indic_popstate = false;
}

function load_youtube_frame() {
    const value = plain_get_attr('FRAME_PLAYER', 'data-src');
    plain_set_attr('FRAME_PLAYER', 'src', value);
    youtube_player_init();
}

function collection_init(collection, default_video) {
    const [ lang, got_lang ] = LANG_PARAMS;
    window.collection_name = collection;
    window.default_video = default_video;

    const elements = document.getElementsByTagName('html');
    window.COLOR_SCHEME = elements[0].getAttribute('data-bs-theme');
    window.RENDER_LANGUAGE = lang;
    window.GOT_LANGUAGE = got_lang;
    window.history_data = undefined;
    window.indic_popstate = false;

    window.NAV_SCROLL_SPY = null;
    window.ACTIVE_MENU = null;
    window.ACTIVE_NAV = null;

    const item_list = CATEGORY_DICT['categories'];
    for (const obj of item_list) {
        MENU_ICON_DICT[obj.C] = obj.I;
    }

    sessionStorage.clear();
    window.addEventListener('storage', on_storage_event, false);
    window.addEventListener('popstate', handle_popstate);

    document.addEventListener('DOMContentLoaded', function() {
        if (document.readyState === "interactive" || document.readyState === "complete" ) {
            setTimeout(load_youtube_frame, 0);
        }
    });

    transliterator_init();

    const l_lang = lang.toLowerCase();
    const url_list = [ fetch_url_data('ID DATA', 'id.json'),
                       fetch_url_data('ABOUT DATA', 'about.json'),
                       fetch_url_data('LANG DATA', `${l_lang}_map.json`)
                     ];
    Promise.all(url_list).then((data_set_list) => { load_init_data(data_set_list); });
}

