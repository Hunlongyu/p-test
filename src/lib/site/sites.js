const sites = [
  {
    key: 'zuidazy',
    name: '最大资源网',
    url: 'http://www.zuidazy1.com',
    view: 'http://www.zuidazy1.com/?m=vod-type-id-{id}-page-{page}.html',
    search: 'http://www.zuidazy1.com/index.php?m=vod-search-pg-{page}-wd-{keywords}.html',
    type: 0,
    tags: [
      {
        title: '最新',
        id: 0,
        children: []
      },
      {
        title: '电影',
        id: 1,
        children: [
          {
            title: '动作片',
            id: 5
          },
          {
            title: '喜剧片',
            id: 6
          },
          {
            title: '爱情片',
            id: 7
          },
          {
            title: '科幻片',
            id: 8
          },
          {
            title: '恐怖片',
            id: 9
          },
          {
            title: '剧情片',
            id: 10
          },
          {
            title: '战争片',
            id: 11
          },
          {
            title: '纪录片',
            id: 22
          }
        ]
      },
      {
        title: '连续剧',
        id: 2,
        children: [
          {
            title: '国产剧',
            id: 12
          },
          {
            title: '香港剧',
            id: 13
          },
          {
            title: '韩国剧',
            id: 14
          },
          {
            title: '欧美剧',
            id: 15
          },
          {
            title: '台湾剧',
            id: 19
          },
          {
            title: '日本剧',
            id: 20
          },
          {
            title: '海外剧',
            id: 21
          }
        ]
      },
      {
        title: '综艺片',
        id: 3,
        children: []
      },
      {
        title: '动漫片',
        id: 4,
        children: []
      },
      {
        title: '福利片',
        id: 16,
        children: []
      },
      {
        title: '伦理片',
        id: 17,
        children: []
      },
      {
        title: '音乐片',
        id: 18,
        children: []
      }
    ]
  },
  {
    key: 'subo',
    name: '速播资源站',
    url: 'https://www.subo988.com',
    view: 'https://www.subo988.com/?m=vod-type-id-{id}-pg-{page}.html',
    search: 'https://www.subo988.com/index.php?m=vod-search-pg-{page}-wd-{keywords}.html',
    type: 0,
    tags: [
      {
        title: '最新',
        id: 0,
        children: []
      },
      {
        title: '电影',
        id: 1,
        children: [
          {
            title: '动作片',
            id: 5
          },
          {
            title: '喜剧片',
            id: 6
          },
          {
            title: '爱情片',
            id: 7
          },
          {
            title: '科幻片',
            id: 8
          },
          {
            title: '恐怖片',
            id: 9
          },
          {
            title: '剧情片',
            id: 10
          },
          {
            title: '战争片',
            id: 11
          },
          {
            title: '伦理片',
            id: 16
          }
        ]
      },
      {
        title: '连续剧',
        id: 2,
        children: [
          {
            title: '国产剧',
            id: 12
          },
          {
            title: '香港剧',
            id: 13
          },
          {
            title: '日本剧',
            id: 14
          },
          {
            title: '欧美剧',
            id: 15
          },
          {
            title: '台湾剧',
            id: 17
          },
          {
            title: '韩国剧',
            id: 18
          },
          {
            title: '海外剧',
            id: 19
          }
        ]
      },
      {
        title: '综艺',
        id: 3,
        children: []
      },
      {
        title: '动漫',
        id: 4,
        children: []
      },
      {
        title: '音乐MV',
        id: 20,
        children: []
      }
    ]
  },
  {
    key: 'zuixinzy',
    name: '最新资源网',
    url: 'http://www.zuixinzy.cc',
    view: 'http://www.zuixinzy.cc/?m=vod-type-id-{id}-pg-{page}.html',
    search: 'http://www.zuixinzy.cc/index.php?m=vod-search-pg-{page}-wd-{keywords}.html',
    type: 0,
    tags: []
  },
  {
    key: '123ku',
    name: '123资源网',
    url: 'https://www.123ku.com',
    view: 'https://www.123ku.com/?m=vod-type-id-{id}-pg-{page}.html',
    search: 'https://www.123ku.com/index.php?m=vod-search-pg-{page}-wd-{keywords}.html',
    type: 0,
    tags: []
  },
  {
    key: 'wolongzy',
    name: '卧龙资源网',
    url: 'https://wolongzy.net',
    view: 'https://wolongzy.net/type/{id}.html?page={page}',
    search: 'https://wolongzy.net/search.html?searchword={keywords}',
    type: 1,
    tags: []
  },
  {
    key: 'gaoqingzy',
    name: '高清资源网',
    url: 'http://www.gaoqingzy.com',
    view: 'http://www.gaoqingzy.com/?m=vod-type-id-{id}-pg-{page}.html',
    search: 'http://www.gaoqingzy.com/search.html?searchword={keywords}',
    type: 2,
    tags: []
  }
]

export default sites
