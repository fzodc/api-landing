import React from 'react';
export const Nav10DataSource = {
  wrapper: { className: 'header1 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header1-logo jvui8alstxd-editor_css',
    children: 'https://www.asiainfo.com/static/images/logo_navigation_bar.png',
  },
  Menu: {
    className: 'header1-menu',
    children: [
      { name: 'item0', a: { children: '首页', href: '' } },
      { name: 'item1', a: { children: 'Api商城', href: '' } },
      { name: 'item2', a: { children: '配置系统', link: 'http://10.19.18.49:8000/',target:'_blank' } },
      { name: 'item3', a: { children: '开发者中心', href: '' } },
    ],
  },
  mobileMenu: { className: 'header1-mobile-menu' },
  help: { className: 'help', children: '帮助' },
  user: {},
};
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page jvuhvp6bz2s-editor_css' },
        textWrapper: { className: 'banner2-text-wrapper' },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: (
            <>
              <p>O2P Lite</p>
            </>
          ),
        },
        content: {
          className: 'banner2-content',
          children: (
            <>
              <p>一个数据互联的缤纷世界，万物互联，让数据成为服务，让服务产生价值，构造数据服务生态链。</p>
            </>
          ),
        },
        button: { className: 'banner2-button', children: 'Learn More' },
      },
    ],
  },
};
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '产品与服务' }],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <>
                <p>Api订阅</p>
              </>
            ),
          },
          content: {
            children: (
              <>
                <p>提供行业标准API，缩短产品开发周期，轻量级集成层，获取有价值的数据</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
          },
          title: {
            className: 'content0-title',
            children: (
              <>
                <p>入驻平台</p>
              </>
            ),
          },
          content: {
            children: (
              <>
                <p>通过平台注册服务能力，让服务产生价值。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
          },
          title: { className: 'content0-title', children: '一站式运营' },
          content: { children: '沉淀Api能力接入效率' },
        },
      },
    ],
  },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/nLzbeGQLPyBJoli.png',
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: {
    className: 'content1-title',
    children: (
      <>
        <p>能力开放平台</p>
      </>
    ),
  },
  content: {
    className: 'content1-content',
    children: (
      <>
        <p>
          组织个人/企业信息总线门户。数据与世界对接变得轻松。提供专业化信息安全，管理模式，盈利模式，推广模式，让您轻松获取利润。
        </p>
      </>
    ),
  },
};
export const Content30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <>
            <p>亚信远航提供专业的服务</p>
          </>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <>
            <p>基于云服务的强大基础资源</p>
          </>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>配置管理</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>日志</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。
                </p>
              </>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>监控平台</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>企业入驻</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>一站式开发及全面监控；丰富可用Api，动态发布和故障热修复。</p>
              </>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>流量控制策略</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children:
              '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <>
                <p>安全策略</p>
              </>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <>
                <p>
                  按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。
                </p>
              </>
            ),
          },
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <>
        <p>
          ©2018 <a href>AsiaInfo</a>&nbsp;All Rights Reserved
        </p>
      </>
    ),
  },
};
