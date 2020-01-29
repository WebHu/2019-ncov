import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './main.css';

const Panel = ({ title, children }) => {
  return (
    <div className="panel">
      <h3 className="panel-title" >{title}</h3>
      <div className="panel-body">
        {children}
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <h1>新型冠状病毒 肺炎疫情实时动态</h1>
    </header>
  );
};

const Overview = ({ data }) => {
  const { confirmedCount, suspectedCount, curedCount, deadCount } = data || {};
  return (
    <ul className="overview" >
      <li>
        <em>{confirmedCount || 'N/A'}</em>
        <span>确诊病例</span>
      </li>
      <li>
        <em>{suspectedCount || 'N/A'}</em>
        <span>疑似病例</span>
      </li>
      <li>
        <em>{curedCount || 'N/A'}</em>
        <span>治愈人数</span>
      </li>
      <li>
        <em>{deadCount || 'N/A'}</em>
        <span>死亡人数</span>
      </li>
    </ul>
  );
};

const Trending = () => {
  return (
    <Panel title="疫情趋势" ></Panel>
  );
};

const AreaMap = ({ data }) => {
  return (
    <Panel title="疫情地图" >
      <img width="100%" src={data} />
    </Panel>
  );
};

const AreaTable = ({ data }) => {
  return (
    <table className="area-detail">
      <thead>
        <tr>
          <th>地区</th>
          <th>疑似</th>
          <th>确诊</th>
          <th>治愈</th>
          <th>死亡</th>
        </tr>
      </thead>
      <tbody>
        {
          (data || [])
            .sort((a, b) => b.confirmedCount - a.confirmedCount)
            .map(p => (
              <tr>
                <td>{p.provinceShortName}</td>
                <td>{p.suspectedCount}</td>
                <td>{p.confirmedCount}</td>
                <td>{p.curedCount}</td>
                <td>{p.deadCount}</td>
              </tr>
            ))
        }
      </tbody>
    </table>
  );
};

const News = ({ data }) => {
  return (
    <Panel title="实时新闻" >
      <ul className="news-list">
        {
          (data || []).map(news => (
            <li>
              <div>
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
                <time time={news.pubDate} >{news.pubDateStr}</time>
                <a href={news.sourceUrl} >{news.infoSource}</a>
              </div>
            </li>
          ))
        }
      </ul>
    </Panel>
  );
};

const Rumors = ({ num = '10' } = {}) => {
  const [list, setData] = useState([]);
  const fetchData = () =>
    Promise
      .resolve()
      .then(() => fetch(`https://file1.dxycdn.com/2020/0127/797/3393185293879908067-115.json`))
      .then(res => res.json())
      .then(res => {
        if (res.code === 'success' && res.successAndNotNull)
          return res.data;
        const err = new Error(res.message)
        err.code = res.code;
        err.response = res;
        throw err;
      })
      .then(setData)

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Panel title="官方辟谣" >
      <ul className="rumors-list">
        {
          list.map(rumor => (
            <li id={`rumor-${rumor.id}`} >
              <h3>{rumor.title}</h3>
              <a href={rumor.sourceUrl}>
                <p>{rumor.mainSummary}</p>
              </a>
              <p>{rumor.body}</p>
            </li>
          ))
        }
      </ul>
    </Panel>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>数据由 <a href="">丁香园</a> 提供，<a href="https://github.com/song940/2019-ncov" >项目源代码</a>遵循 MIT 协议发布 &copy; <a href="https://lsong.org" >LSONG.ORG</a></p>
    </footer>
  );
};

const dxy_pneumonia = () =>
  Promise
    .resolve()
    .then(() => fetch(`https://dxy-pneumonia.lsong.workers.dev`))
    .then(res => res.json())

const App = () => {
  const [data, setData] = useState({});

  const { AreaStat, StatisticsService, TimelineService } = data;
  const { imgUrl } = StatisticsService || {};
  useEffect(() => {
    dxy_pneumonia().then(setData);
  }, []);
  return (
    <div>
      <Header />
      <Overview data={StatisticsService} />
      <AreaMap data={imgUrl} />
      <AreaTable data={AreaStat} />
      <News data={TimelineService} />
      <Rumors />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('app'));
