/* eslint-disable */
import Mock from "mockjs"
var base_url = "http://127.0.0.1:3000"

// 开发数据
Mock.mock(base_url + '/login', {
  'token': Mock.Random.string(20)
})

Mock.mock(base_url + '/user', {
  code: 200,
  msg: 'success',
  data: {
    nickname: 'amilytom',
    headimgurl: 'https://avatars1.githubusercontent.com/u/25951301?s=40&v=4',
    role: 'admin'
  }
})

Mock.mock(base_url + '/list', {
  'code': 0,
  'msg': '',
  'data': [
    {
      'type': 3,
      'sound': {
        "name": "甜腻腻的韩国小清新 우리만나요",
        "user": {
          "id": "18214209",
          "name": "浅浅猫恋鱼",
        },
        "author": null,
        "composer": null,
        "lyrics": null,
        "ori_singer": null,
        "song_info": {
          "name": {
            "field": "name",
            "type": "歌曲",
            "name": "우리만나요 (샤이니의 월드데이트 삽입곡)",
            "verify_id": 0,
            "verify_type": 0
          },
          "author": {
            "field": "author",
            "type": "音乐人",
            "name": "家庭手工业",
            "verify_id": 0,
            "verify_type": 1
          },
          "album_name": {
            "field": "album_name",
            "type": "专辑",
            "name": "우리만나요",
            "verify_id": 0,
            "verify_type": 2
          }
        },
      }
    },
    {
      'type': 3,
      'sound': {
        "name": "超燃！腿毛都竖起来了 The Phoenix",
        "view_count": "11020480",
        "sound_type": "1",
        "length": "245",
        "hot_time": "0",
        "web_source": "",
        "is_liquefying": "0",
        "update_user_id": "933150",
        "id": "187867",

        "status_mask": "0",
        "recommend_short_video_id": "0",
        "is_recording": "0",
        "source": "https:\/\/al-qn-echo-cp-cdn.app-echo.com\/c2\/9721e2739dc3d4b9444a0fea47272c7684e273807c5f911e28439ad6fefb52ffd5eaade8.mp3?1448194178",
        "check_status": "1",
        "relay_count": "0",
        "hls_key": "",
        "lan_kr": "1",
        "download_count": "21589",
        "lan_cn": "1",
        "create_time": "1419698088",
        "like_count": 53586,
        "pay_coins": 0,
        "hls_status": "0",
        "channel_id": "21",
        "original": 0,
        "pic": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/01\/30\/d3af925355d47383.jpeg",
        "download_level": "0",
        "backup_id": "0",

        "is_pay": 0,
        "ad_id": 0,
        "lan_hant": "1",
        "is_show_view_count": "1",
        "exchange_count": "13972",
        "activity_id": "0",
        "info": "我将像混音一样改变你的一切；让你如凤凰般涅槃重生\r\n\r\n曲名：The Phoenix\r\n艺人：Fall Out Boy\r\n\r\n",
        "short_video_count": 1,
        "is_edit": "1",
        "copyright": "0",
        "lan_jp": "1",
        "parent_id": "0",
        "translate_mask": "2",
        "third_type": "0",
        "tag": "18",
        "check_visition": "1",
        "source2": "",
        "delete_status": "0",
        "crosstalk_id": "0",
        "third_id": "0",
        "hot_status": "0",
        "gift_coins_count": "0",
        "user_id": "933150",
        "h5_clickbtn_count": "0",
        "third_author": "",
        "lan_en": "1",
        "author_id": "0",
        "comment_count": "2750",
        "status": "1",
        "pay_cash": 0,
        "update_time": "1515913206",
        "user_is_authenticated": "1",
        "commend_time": "1496316600",
        "share_count": "13972",
        "pic_100": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/01\/30\/d3af925355d47383.jpeg!\/fwfh\/100x100\/unsharp\/true",
        "pic_200": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/01\/30\/d3af925355d47383.jpeg!\/fwfh\/200x200\/unsharp\/true",
        "pic_500": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/01\/30\/d3af925355d47383.jpeg!\/fwfh\/500x500\/unsharp\/true",
        "pic_640": "https://qn-qn-echo-image-cdn.app-echo.com/Fi8NiBB-5Gi0aAswqWOI9Og3VIDz.jpg?imageMogr2/auto-orient/quality/100%7CimageView2/4/w/640/q/100",
        "pic_750": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/01\/30\/d3af925355d47383.jpeg!\/fwfh\/750x750\/unsharp\/true",
        "pic_1080": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/01\/30\/d3af925355d47383.jpeg!\/fwfh\/1080x1080\/unsharp\/true",
        "user": {
          "id": "933150",
          "name": "undertaker",
          "avatar": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/e434cecef9671d4cc5ca855c9f9b808604e2d7ab?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0",
          "photo": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/e434cecef9671d4cc5ca855c9f9b808604e2d7ab",
          "pay_class": "1",
          "pay_status": "2",
          "famous_status": "0",
          "followed_count": "753",
          "status": "1",
          "is_ready": 0,
          "type_mask": "0",
          "gender": 0,
          "city": "贵州",
          "famous_type": null,
          "famous_cover_pic": "",
          "is_musician": 0,
          "is_real_famous": 0,
          "avatar_150": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/e434cecef9671d4cc5ca855c9f9b808604e2d7ab?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!150x150r\/gravity\/Center\/crop\/150x150\/dx\/0\/dy\/0",
          "avatar_100": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/e434cecef9671d4cc5ca855c9f9b808604e2d7ab?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!100x100r\/gravity\/Center\/crop\/100x100\/dx\/0\/dy\/0",
          "avatar_50": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/e434cecef9671d4cc5ca855c9f9b808604e2d7ab?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!50x50r\/gravity\/Center\/crop\/50x50\/dx\/0\/dy\/0",
          "is_follow": 0
        },
        "author": null,
        "composer": null,
        "lyrics": null,
        "ori_singer": null,
        "song_info": {
          "name": {
            "field": "name",
            "type": "歌曲",
            "name": "Fall Out Boy",
            "verify_id": 0,
            "verify_type": 0
          },
          "author": {
            "field": "author",
            "type": "音乐人",
            "name": "Fall Out Boy",
            "verify_id": 0,
            "verify_type": 1
          }
        },
        "is_like": 0,
        "is_xm": 0,
        "is_hot": 4,
        "channel": {
          "id": "21",
          "name": "欧美摇滚基地",
          "pic": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png",
          "info": "摇滚也是一种生活态度",
          "type": "1",
          "tag_id": "5",
          "sound_count": "4874",
          "follow_count": "72072",
          "like_count": "0",
          "share_count": "442",
          "user_id": "115163",
          "update_user_id": "115163",
          "list_order": "31754",
          "create_time": "1399450782",
          "update_time": "1516839302",
          "status": "1",
          "desp": "欧美摇滚  ",
          "pic_100": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png!\/fwfh\/100x100\/unsharp\/true",
          "pic_200": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png!\/fwfh\/200x200\/unsharp\/true",
          "pic_500": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png!\/fwfh\/500x500\/unsharp\/true",
          "pic_640": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png!\/fwfh\/640x640\/unsharp\/true",
          "pic_750": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png!\/fwfh\/750x750\/unsharp\/true",
          "pic_1080": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png!\/fwfh\/1080x1080\/unsharp\/true"
        },
        "img_download_count": "256",
        "ad": null,
        "relevance": [],
        "hidden_play_count": 0,
        "tags": [{
          "id": "5",
          "name": "摇滚",
          "type": 0,
          "isMyTag": 0,
          "count": 7490
        },
        {
          "id": "271",
          "name": "欧美",
          "type": 0,
          "isMyTag": 0,
          "count": 7369
        },
        {
          "id": "275",
          "name": "欧美文化",
          "type": 0,
          "isMyTag": 0,
          "count": 5339
        },
        {
          "id": "250",
          "name": "流行摇滚",
          "type": 0,
          "isMyTag": 0,
          "count": 3995
        },
        {
          "id": "210",
          "name": "金属",
          "type": 0,
          "isMyTag": 0,
          "count": 3965
        },
        {
          "id": "174",
          "name": "工业",
          "type": 0,
          "isMyTag": 0,
          "count": 3943
        },
        {
          "id": "249",
          "name": "流行朋克",
          "type": 0,
          "isMyTag": 0,
          "count": 3935
        },
        {
          "id": "113",
          "name": "好听",
          "isMyTag": 0,
          "type": 1,
          "count": 2504
        },
        {
          "id": "497",
          "name": "睡觉",
          "isMyTag": 0,
          "type": 1,
          "count": 2120
        },
        {
          "id": "182",
          "name": "节奏",
          "isMyTag": 0,
          "type": 1,
          "count": 2010
        },
        {
          "id": "304",
          "name": "运动",
          "isMyTag": 0,
          "type": 1,
          "count": 893
        },
        {
          "id": "1590",
          "name": "嗨",
          "isMyTag": 0,
          "type": 1,
          "count": 640
        },
        {
          "id": "375",
          "name": "燃",
          "isMyTag": 0,
          "type": 1,
          "count": 636
        },
        {
          "id": "2192",
          "name": "英文歌",
          "isMyTag": 0,
          "type": 1,
          "count": 415
        },
        {
          "id": "2742",
          "name": "耳机",
          "isMyTag": 0,
          "type": 1,
          "count": 281
        },
        {
          "id": "9074",
          "name": "特别好听",
          "isMyTag": 0,
          "type": 1,
          "count": 147
        },
        {
          "id": "5660",
          "name": "嗨嗨嗨",
          "isMyTag": 0,
          "type": 1,
          "count": 54
        },
        {
          "id": "15327",
          "name": "动",
          "isMyTag": 0,
          "type": 1,
          "count": 47
        },
        {
          "id": "14526",
          "name": "激情四射吧",
          "isMyTag": 0,
          "type": 1,
          "count": 27
        },
        {
          "id": "12907",
          "name": "抖骚",
          "isMyTag": 0,
          "type": 1,
          "count": 25
        },
        {
          "id": "2221",
          "name": "Fall Out Boy",
          "type": 0,
          "isMyTag": 0,
          "count": 15
        },
        {
          "id": "12367",
          "name": "摇滚乐",
          "isMyTag": 0,
          "type": 1,
          "count": 14
        },
        {
          "id": "22927",
          "name": "hear",
          "isMyTag": 0,
          "type": 1,
          "count": 13
        },
        {
          "id": "16069",
          "name": "气势磅礴OST",
          "isMyTag": 0,
          "type": 1,
          "count": 8
        },
        {
          "id": "25518",
          "name": "战吼",
          "isMyTag": 0,
          "type": 1,
          "count": 5
        }
        ],
        "add_tag_user_count": "63",
        "cover_song": null,
        "cover_song_type": 0,
        "camp_icon": "",
        "camp_id": 0,
        "recommend_type": 1,
        "status_mask_array": [0, 0, 0, 0, 0, 0, 0],
        "is_original": 0,
        "can_game": 0,
        "can_beat": 0,
        "level_limit": 1,
        "show_beat": 0,
        "beat_id": 187867,
        "is_diy_sound": 0,
        "is_has_bells": 1,
        "is_hide_bells": 0,
        "is_send_goods": 0,
        "short_videos": [{
          "id": "1433489",
          "name": "沉着i上传的MV1",
          "view_count": 1390,
          "is_edit": "2",
          "is_pay": 0,
          "check_visition": 1,
          "translate_mask": 0,
          "cover_song_id": 0,
          "cover_song_type": 0,
          "sound_type": 2,
          "create_time": 1492960065,
          "parent_id": "187867",
          "pic_100": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/100\/q\/100",
          "pic_200": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/200\/q\/100",
          "pic_500": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/500\/q\/100",
          "pic_640": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/640\/q\/100",
          "pic_750": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/750\/q\/100",
          "pic_1080": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/1080\/q\/100",
          "channel": {
            "id": "21",
            "name": "欧美摇滚基地",
            "pic": "https:\/\/qn-up-kibey-fair-cdn.app-echo.com\/poster\/2014\/05\/28\/d3b7c7a53e86dafc.png",
            "user_id": "115163",
            "is_follow": 0
          },
          "status_mask_array": [0, 0, 0, 0, 0, 0, 0],
          "is_original": 0,
          "is_hot": 0,
          "user": {
            "id": "21069330",
            "name": "沉着i",
            "avatar": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/wb\/a395900290eb90b83ab471a195b2b954f207d344?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0",
            "photo": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/wb\/a395900290eb90b83ab471a195b2b954f207d344",
            "pay_class": "0",
            "pay_status": "0",
            "famous_status": "0",
            "followed_count": "0",
            "status": "1",
            "is_ready": 0,
            "type_mask": "0",
            "gender": 0,
            "city": "",
            "famous_type": null,
            "is_musician": 0,
            "is_real_famous": 0,
            "avatar_150": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/wb\/a395900290eb90b83ab471a195b2b954f207d344?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!150x150r\/gravity\/Center\/crop\/150x150\/dx\/0\/dy\/0",
            "avatar_100": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/wb\/a395900290eb90b83ab471a195b2b954f207d344?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!100x100r\/gravity\/Center\/crop\/100x100\/dx\/0\/dy\/0",
            "avatar_50": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/wb\/a395900290eb90b83ab471a195b2b954f207d344?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!50x50r\/gravity\/Center\/crop\/50x50\/dx\/0\/dy\/0"
          },
          "composer": null,
          "lyrics": null,
          "ori_singer": null,
          "song_info": null,
          "is_bought": 1,
          "is_like": 0,
          "is_unlike": 0,
          "share": {
            "title": "@沉着i制作了一个MV，已经被圈粉啦！大家速来围观～",
            "info": "echo回声新技能get，轻松拍摄音乐MV，10秒做出高质MV",
            "url": "http:\/\/www.app-echo.com\/sound\/1433489",
            "pic": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/5d0224d96d2b68a6567cbce59a1e37d4.png-share_video"
          }
        }],
        "is_bought": 1,
        "allow_channels_id": [1, 2],
        "star-singer": 0
      }
    },
    {
      'type': 3,
      "sound": {
        "name": "天空之城 卡农合奏",
        "view_count": "14586902",
        "sound_type": "1",
        "third_author": "",
        "third_type": "0",
        "download_level": "0",
        "cover_song_id": "0",
        "lan_hant": "1",
        "is_recording": "0",
        "pic": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K",
        "like_count": 105602,
        "update_time": "1515733203",
        "hls_key": "",
        "tag": "18",
        "pay_coins": 0,
        "channel_id": "1122",
        "lan_en": "1",
        "backup_id": "0",
        "crosstalk_id": "",
        "lan_kr": "1",
        "exchange_count": "44151",
        "check_visition": "1",
        "source2": "",
        "desp": "",
        "type": "1",
        "is_pay": 0,
        "list_order": "43737",
        "pay_cash": 0,
        "h5_clickbtn_count": "0",
        "status_mask": "0",
        "activity_id": "0",
        "update_user_id": "56268",
        "user_id": "56268",
        "check_status": "1",
        "third_id": "0",
        "original": 0,
        "translate_mask": "6",
        "commend_time": "1509633000",
        "ad_id": 0,
        "lan_jp": "1",
        "recommend_short_video_id": "0",
        "pay_count": "0",
        "gift_coins_count": "0",
        "relay_count": "0",
        "comment_count": "7763",
        "short_video_count": 0,
        "length": "152",
        "hls_status": "0",
        "id": "79715",
        "download_count": "37057",
        "info": "这是天空之城和卡农的融合曲。前半段是天空之城强，后半段是卡农强。\r\n\r\n如果只当成一首歌第一次听，中间衔接的地方可能有点混淆，但是第二遍仔细听就能分辨出从天空之城渐变到卡农的神奇转折过渡。毫无PS痕迹，真的很有创意啊。",
        "share_count": "44151",
        "pic_100": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/100\/q\/100",
        "pic_200": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/200\/q\/100",
        "pic_500": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/500\/q\/100",
        "pic_640": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/640\/q\/100",
        "pic_750": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/750\/q\/100",
        "pic_1080": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FiAe8_ugK1U9j8tz75b2XgfomP4K?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/1080\/q\/100",
        "user": {
          "id": "56268",
          "name": "佑",
          "avatar": "https:\/\/qn-up-kibey-sys-avatar-cdn.app-echo.com\/00\/00\/00\/05\/62\/68\/root11130725crop.jpg!\/both\/250x250\/unsharp\/true",
          "photo": "\/00\/00\/00\/05\/62\/68\/root11130725.jpg",
          "pay_class": "2",
          "pay_status": "2",
          "famous_status": "0",
          "followed_count": "2203",
          "status": "0",
          "is_ready": 0,
          "type_mask": "0",
          "gender": 0,
          "city": "",
          "famous_type": null,
          "is_musician": 0,
          "is_real_famous": 0,
          "avatar_150": "https:\/\/qn-up-kibey-sys-avatar-cdn.app-echo.com\/00\/00\/00\/05\/62\/68\/root11130725crop.jpg!\/both\/150x150\/unsharp\/true",
          "avatar_100": "https:\/\/qn-up-kibey-sys-avatar-cdn.app-echo.com\/00\/00\/00\/05\/62\/68\/root11130725crop.jpg!\/both\/100x100\/unsharp\/true",
          "avatar_50": "https:\/\/qn-up-kibey-sys-avatar-cdn.app-echo.com\/00\/00\/00\/05\/62\/68\/root11130725crop.jpg!\/both\/50x50\/unsharp\/true",
          "is_follow": 0
        },
        "author": null,
        "composer": null,
        "lyrics": null,
        "ori_singer": null,
        "song_info": {
          "name": {
            "field": "name",
            "type": "歌曲",
            "name": "天空之城 卡农",
            "verify_id": 0,
            "verify_type": 0
          }
        },
        "is_like": 0,
        "is_xm": 0,
        "is_hot": 4,
        "channel": {
          "id": "1122",
          "name": "多味卡农",
          "pic": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg",
          "info": "卡农Canon（不是佳能！！！）——复调音乐的一种，原意为“规律”。一个声部的曲调自始至终追逐着另一声部，直到最后……最后的一个小结，最后的一个和弦，它们会融合在一起，永不分离。缠绵极至的音乐，就像两个人生死追随。 \r\n\r\n或治愈，或激情，或感动，或伤感，不同的卡农需要不同的心情去体会，让我们学会理解生命和所谓的生活。\r\n\r\n这正是真正的音乐所缔造的价值。",
          "type": "1",
          "tag_id": "5",
          "sound_count": "725",
          "follow_count": "86731",
          "like_count": "0",
          "share_count": "2959",
          "user_id": "160623",
          "update_user_id": "160623",
          "list_order": "35128",
          "create_time": "1420471756",
          "update_time": "1516846501",
          "status": "1",
          "desp": "",
          "pic_100": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg!\/fwfh\/100x100\/unsharp\/true",
          "pic_200": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg!\/fwfh\/200x200\/unsharp\/true",
          "pic_500": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg!\/fwfh\/500x500\/unsharp\/true",
          "pic_640": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg!\/fwfh\/640x640\/unsharp\/true",
          "pic_750": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg!\/fwfh\/750x750\/unsharp\/true",
          "pic_1080": "https:\/\/qn-up-kibey-echo-cdn.app-echo.com\/poster\/2015\/11\/25\/58edizo2gcif34xd.jpg!\/fwfh\/1080x1080\/unsharp\/true"
        },
        "img_download_count": "79",
        "ad": null,
        "relevance": [],
        "hidden_play_count": 0,
        "tags": [{
          "id": "167",
          "name": "改编",
          "type": 0,
          "isMyTag": 0,
          "count": 23035
        },
        {
          "id": "128",
          "name": "纯音乐",
          "type": 0,
          "isMyTag": 0,
          "count": 9375
        },
        {
          "id": "497",
          "name": "睡觉",
          "isMyTag": 0,
          "type": 1,
          "count": 2120
        },
        {
          "id": "446",
          "name": "安静",
          "isMyTag": 0,
          "type": 1,
          "count": 1984
        },
        {
          "id": "392",
          "name": "轻音乐",
          "isMyTag": 0,
          "type": 1,
          "count": 1448
        },
        {
          "id": "434",
          "name": "动漫",
          "isMyTag": 0,
          "type": 1,
          "count": 1231
        },
        {
          "id": "407",
          "name": "治愈",
          "isMyTag": 0,
          "type": 1,
          "count": 1167
        },
        {
          "id": "600",
          "name": "钢琴",
          "type": 0,
          "isMyTag": 0,
          "count": 1145
        },
        {
          "id": "222",
          "name": "卡农",
          "type": 0,
          "isMyTag": 0,
          "count": 591
        },
        {
          "id": "30",
          "name": "Canon",
          "type": 0,
          "isMyTag": 0,
          "count": 580
        },
        {
          "id": "575",
          "name": "最爱",
          "isMyTag": 0,
          "type": 1,
          "count": 575
        },
        {
          "id": "9098",
          "name": "前奏入迷",
          "isMyTag": 0,
          "type": 1,
          "count": 476
        },
        {
          "id": "3802",
          "name": "听觉盛宴",
          "isMyTag": 0,
          "type": 1,
          "count": 400
        },
        {
          "id": "3452",
          "name": "作业",
          "isMyTag": 0,
          "type": 1,
          "count": 312
        },
        {
          "id": "445",
          "name": "钢琴曲",
          "isMyTag": 0,
          "type": 1,
          "count": 193
        },
        {
          "id": "546",
          "name": "器乐",
          "isMyTag": 0,
          "type": 1,
          "count": 162
        },
        {
          "id": "3472",
          "name": "自己的",
          "isMyTag": 0,
          "type": 1,
          "count": 68
        },
        {
          "id": "17791",
          "name": "okey",
          "isMyTag": 0,
          "type": 1,
          "count": 64
        },
        {
          "id": "2023",
          "name": "天空之城",
          "type": 0,
          "isMyTag": 0,
          "count": 19
        },
        {
          "id": "4320",
          "name": "混搭",
          "type": 0,
          "isMyTag": 0,
          "count": 12
        },
        {
          "id": "7722",
          "name": "PIANO",
          "isMyTag": 0,
          "type": 1,
          "count": 8
        },
        {
          "id": "56463",
          "name": "天空之城 卡农",
          "type": 0,
          "isMyTag": 0,
          "count": 1
        }
        ],
        "add_tag_user_count": "85",
        "cover_song": null,
        "cover_song_type": 0,
        "camp_icon": "",
        "camp_id": 0,
        "recommend_type": 1,
        "status_mask_array": [0, 0, 0, 0, 0, 0, 0],
        "is_original": 0,
        "can_game": 0,
        "can_beat": 0,
        "level_limit": 1,
        "show_beat": 0,
        "beat_id": 79715,
        "is_diy_sound": 0,
        "is_has_bells": 1,
        "is_hide_bells": 0,
        "is_send_goods": 0,
        "short_videos": [],
        "is_bought": 1,
        "allow_channels_id": [1, 2],
        "star-singer": 0
      }
    },
    {
      'type': 3,
      "sound": {

        "name": "欧美男子独立乐团Rixton Make Out",

        "user_id": "2911169",
        "view_count": "1300260",
        "copyright": "0",
        "hls_status": "0",
        "lan_jp": "1",
        "update_user_id": "2911169",
        "is_pay": 0,
        "length": "207",
        "exchange_count": "5016",
        "update_time": "1515690011",
        "gift_coins_count": "0",
        "lrc": "",
        "short_video_count": 0,
        "relay_count": "0",
        "list_order": "9442",
        "hot_time": "0",
        "web_source": "",
        "status_mask": "0",
        "comment_count": "738",
        "desp": "",
        "source2": "android",
        "create_time": "1430289323",
        "ad_id": 0,
        "download_level": "0",
        "channel_id": "190",
        "check_visition": "1",
        "pic": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/FpHs1XZ7Ge3agbj43LdaSPBCvPZH",
        "third_author": "",
        "type": "1",
        "is_liquefying": "0",
        "source": "https:\/\/al-qn-echo-cp-cdn.app-echo.com\/c2\/364cf296e0d5aa02c27533a0363b22ab3e2ad68ec473e3c32136d667786201d267fcb1a0.mp3?1448184019",
        "activity_id": "0",
        "lan_kr": "1",
        "status": "1",

        "id": "413454",
        "third_id": "0",
        "parent_id": "0",
        "is_edit": "1",
        "is_recording": "0",
        "h5_clickbtn_count": "0",
        "cover_song_id": "0",
        "crosstalk_id": "0",
        "hot_status": "0",
        "is_show_view_count": "1",
        "delete_status": "0",
        "tag": "18",
        "pay_coins": 0,
        "backup_id": "0",
        "recommend_short_video_id": "0",
        "user_is_authenticated": "1",
        "lan_cn": "1",
        "hls_key": "3",
        "check_status": "1",
        "third_type": "0",
        "like_count": 23242,
        "pay_cash": 0,
        "original": 0,
        "sound_type": "1",
        "download_count": "8197",
        "commend_time": "1516849200",
        "pay_count": "0",
        "share_count": "5016",
        "user": {
          "id": "2911169",
          "name": "-重症病人-",
          "avatar": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/b49e3b74e46145ad1ecc216ad136006d6a6bd6da?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0",
          "photo": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/6d3ab378e72546eabf35efc6f052f6784c93eb1b",
          "pay_class": "0",
          "pay_status": "0",
          "famous_status": "0",
          "followed_count": "1702",
          "status": "1",
          "is_ready": 0,
          "type_mask": "0",
          "gender": 0,
          "city": "东京",
          "famous_type": null,
          "is_musician": 0,
          "is_real_famous": 0,
          "avatar_150": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/b49e3b74e46145ad1ecc216ad136006d6a6bd6da?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!150x150r\/gravity\/Center\/crop\/150x150\/dx\/0\/dy\/0",
          "avatar_100": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/b49e3b74e46145ad1ecc216ad136006d6a6bd6da?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!100x100r\/gravity\/Center\/crop\/100x100\/dx\/0\/dy\/0",
          "avatar_50": "https:\/\/qn-qn-echo-image-cdn.app-echo.com\/b49e3b74e46145ad1ecc216ad136006d6a6bd6da?imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!250x250r\/gravity\/Center\/crop\/250x250\/dx\/0\/dy\/0&imageMogr2\/auto-orient\/quality\/100%7CimageMogr2\/thumbnail\/!50x50r\/gravity\/Center\/crop\/50x50\/dx\/0\/dy\/0",
          "is_follow": 0
        },
        "author": null,
        "composer": null,
        "lyrics": null,
        "ori_singer": null,
        "song_info": {
          "name": {
            "field": "name",
            "type": "歌曲",
            "name": "Make Out",
            "verify_id": 0,
            "verify_type": 0
          },
          "author": {
            "field": "author",
            "type": "音乐人",
            "name": "Rixton",
            "verify_id": 20799829,
            "verify_type": 1
          },
          "album_name": {
            "field": "album_name",
            "type": "专辑",
            "name": "Let the Road",
            "verify_id": 0,
            "verify_type": 2
          }
        },
        "is_like": 0,
        "is_xm": 0,
        "is_hot": 2,
        "channel": {
          "id": "190",
          "name": "欧美流行指南",
          "pic": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj",
          "info": "集结最新最精的欧美流行内容",
          "type": "1",
          "tag_id": "5",
          "sound_count": "75229",
          "follow_count": "616413",
          "like_count": "0",
          "share_count": "3751",
          "user_id": "2",
          "update_user_id": "18258603",
          "list_order": "545685",
          "create_time": "1401509792",
          "update_time": "1507519368",
          "status": "1",
          "desp": "",
          "pic_100": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/100\/q\/100",
          "pic_200": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/200\/q\/100",
          "pic_500": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/500\/q\/100",
          "pic_640": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/640\/q\/100",
          "pic_750": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/750\/q\/100",
          "pic_1080": "https:\/\/al-qn-echo-image-cdn.app-echo.com\/Fp-e_oa1y0kZskHzdxSqQyLxhNvj?imageMogr2\/auto-orient\/quality\/100%7CimageView2\/0\/w\/1080\/q\/100"
        },
        "img_download_count": "12",
        "ad": null,
        "relevance": [],
        "hidden_play_count": 0,
        "tags": [{
          "id": "82",
          "name": "pop music",
          "type": 0,
          "isMyTag": 0,
          "count": 84097
        },
        {
          "id": "274",
          "name": "欧美流行",
          "type": 0,
          "isMyTag": 0,
          "count": 56938
        },
        {
          "id": "100",
          "name": "Western Pop",
          "type": 0,
          "isMyTag": 0,
          "count": 56655
        },
        {
          "id": "182",
          "name": "节奏",
          "isMyTag": 0,
          "type": 1,
          "count": 2010
        },
        {
          "id": "1183",
          "name": "英文",
          "isMyTag": 0,
          "type": 1,
          "count": 1728
        },
        {
          "id": "5615",
          "name": "下载",
          "isMyTag": 0,
          "type": 1,
          "count": 1472
        },
        {
          "id": "289",
          "name": "英语",
          "isMyTag": 0,
          "type": 1,
          "count": 715
        },
        {
          "id": "383",
          "name": "轻快",
          "isMyTag": 0,
          "type": 1,
          "count": 592
        },
        {
          "id": "20266",
          "name": "热英",
          "isMyTag": 0,
          "type": 1,
          "count": 277
        },
        {
          "id": "5837",
          "name": "r",
          "isMyTag": 0,
          "type": 1,
          "count": 226
        },
        {
          "id": "2307",
          "name": "Rixton",
          "type": 0,
          "isMyTag": 0,
          "count": 4
        },
        {
          "id": "62940",
          "name": "Make Out",
          "type": 0,
          "isMyTag": 0,
          "count": 1
        },
        {
          "id": "62941",
          "name": "Let the Road",
          "type": 0,
          "isMyTag": 0,
          "count": 1
        }
        ],
        "add_tag_user_count": "5",
        "cover_song": null,
        "cover_song_type": 0,
        "camp_icon": "",
        "camp_id": 0,
        "recommend_type": 1,
        "status_mask_array": [0, 0, 0, 0, 0, 0, 0],
        "is_original": 0,
        "can_game": 0,
        "can_beat": 0,
        "level_limit": 1,
        "show_beat": 0,
        "beat_id": 413454,
        "is_diy_sound": 0,
        "is_has_bells": 1,
        "is_hide_bells": 0,
        "is_send_goods": 0,
        "short_videos": [],
        "is_bought": 1,
        "allow_channels_id": [1, 2],
        "star-singer": 0
      }
    },

  ]
})
