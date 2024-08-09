import { InputItem } from './types';

export const USER_GROUP_IDS = [
  { name: 'fe1', id: 'S06J9P5HQ2U' },
  { name: 'fe-hmgdev', id: 'S067AHD9MFZ' },
];

export const SLACK_GITHUB_USER_MAP = {
  U05PV23Q8AZ: 'ignite-junho',
  U04FBFS5SCX: 'ignite-hyunji',
  U04D5SP327J: 'ignite-gabin',
  U04DLF61U9K: 'ignite-sungchan',
  U04FUFTCGCC: 'ignite-seongju',
};

export const CHANNEL_IDS = [
  { name: '이그나이트', id: 'C049HGQT9ST' },
  { name: '랜덤', id: 'C049V4J95NZ' },
  { name: 'cpo-code-review', id: 'C049XEKQ8AJ' },
  { name: '일반', id: 'C049Y00LMH9' },
  { name: 'cpo-프라이싱', id: 'C04CB5SBCLT' },
  { name: 'cpo-판매금융', id: 'C04CDMRE0N8' },
  { name: 'fe-정보공유', id: 'C04ET5DMYAC' },
  { name: '프라이싱엔진알림_test', id: 'C04MESZA9FB' },
  { name: 'cpo-결제', id: 'C04MY87NMQX' },
  { name: 'cpo-bo', id: 'C04N82W0RPY' },
  { name: 'cpo-qa', id: 'C053GEE9A5R' },
  { name: '기아-cpo-인프라구성', id: 'C054BH5GV0F' },
  { name: 'app-distributions', id: 'C056YP55HHQ' },
  { name: 'fe1-dm', id: 'C04HYKFMXT2' },
  { name: 'fe-dm', id: 'C0617SQTU67' },
];

export const PROJECT_NAMES = [
  { name: 'CPO BO', value: 'kia-cpo-bo-web' },
  { name: 'HMG Developer', value: 'hmg-dev-web' },
  { name: 'Groupware', value: 'hmg-groupware-bo-web' },
];

export const CPO_BO_URLS: InputItem[] = [
  {
    type: 'Service',
    name: 'Jira',
    url: 'https://ignitecorp.atlassian.net/jira/software/c/projects/KQ/boards/20',
  },
  {
    type: 'Service',
    name: 'Jira',
    url: 'https://ignitecorp.atlassian.net/jira/software/c/projects/KQ/boards/20',
  },
  {
    type: 'Service',
    name: 'Gitlab',
    url: 'https://gitlab.hmc.co.kr/kia-cpo/kia-cpo-bo-web',
  },
  {
    type: 'Service',
    name: 'BO 검증계',
    url: 'https://stg-cpo.kia-corp.io/',
  },
  {
    type: 'Service',
    name: '개발계 Swagger',
    url: 'http://ict-dev-kiacpo-ec2-bo-adminapi-an2.eba-w8icnfdb.ap-northeast-2.elasticbeanstalk.com/swagger-ui/index.html',
  },
  {
    type: 'Service',
    name: '검증계 Swagger',
    url: 'https://stg-cpo-api.kia-corp.io/swagger-ui/index.html',
  },
  {
    type: 'Service',
    name: '검증계2 Swagger',
    url: 'https://stg2-cpo-api.kia-corp.io/swagger-ui/index.html',
  },
  {
    type: 'Service',
    name: '검증계 Datadog',
    url: 'https://app.datadoghq.com/apm/traces?query=env%3Astg%20service%3Akia-cpo-bo-web',
  },
  {
    type: 'Service',
    name: '운영계 Datadog',
    url: 'https://app.datadoghq.com/apm/traces?query=%40_top_level%3A1%20env%3Aprd%20service%3Akia-cpo-bo-web',
  },
  {
    type: 'Confluence',
    name: 'FE) B/O - 담당자',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/CPO/pages/433520642/FE+B+O+-',
  },
  {
    type: 'Confluence',
    name: 'FE - Git branch / merge 정책, 운영계 정기배포',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/HDS/pages/394690630/FE+-+Git+branch+merge',
  },
  {
    type: 'Confluence',
    name: 'BO 기획문서',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/CPO/pages/4816897/Back+Office',
  },
  {
    type: 'Service',
    name: 'Sonarqube',
    url: 'https://sonarqube.hmg-corp.io/projects',
  },
  {
    type: 'Service',
    name: 'Blackduck',
    url: 'https://blackduck.hmg-corp.io/',
  },
  {
    type: 'Service',
    name: 'BO Storybook',
    url: 'https://ignite-corp.github.io/kia-cpo-bo-web/?path=/story/foundation-colors--colors',
  },
];

export const HMG_DEV_URLS: InputItem[] = [
  {
    type: 'Service',
    name: 'Jira',
    url: 'https://ignitecorp.atlassian.net/jira/software/c/projects/HDD/boards/37',
  },
  {
    type: 'Service',
    name: 'Gitlab',
    url: 'https://gitlab.hmc.co.kr/ignite-hmg-developers/hmg-developers',
  },
  {
    type: 'Service',
    name: 'Sonarqube',
    url: 'https://sonarqube.hmg-corp.io/projects',
  },
  {
    type: 'Service',
    name: 'Blackduck',
    url: 'https://blackduck.hmg-corp.io/',
  },
  {
    type: 'Swagger',
    name: '로컬 개발',
    url: 'http://internal-local-developers-api-363591690.ap-northeast-2.elb.amazonaws.com/swagger-ui/index.html',
  },
  {
    type: 'Swagger',
    name: '개발계',
    url: 'https://dev-developers-api.hmg-corp.io/swagger-ui/index.html',
  },
  {
    type: 'Swagger',
    name: '검증계',
    url: 'https://stg-developers-api.hmg-corp.io/swagger-ui/index.html',
  },
  {
    type: 'Swagger',
    name: '로컬 개발 (공통 공지)',
    url: 'https://internal-local-support-api-1311485605.ap-northeast-2.elb.amazonaws.com/swagger-ui/index.html',
  },
  {
    type: 'Swagger',
    name: '개발계 (공통 공지)',
    url: 'https://dev-support-api.hmg-corp.io/swagger-ui/index.html',
  },
  {
    type: 'Swagger',
    name: '검증계 (공통 공지)',
    url: 'https://stg-support-api.hmg-corp.io/swagger-ui/index.html',
  },
  {
    type: 'Dooray',
    name: 'hmg-Admin 연동가이드 v1.17',
    url: 'https://hmg.dooray.com/share/pages/UdcxjWw3Qbi8H5IBcUSzew',
  },
  {
    type: 'Confluence',
    name: 'FE - 프로젝트 정보',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/HDS/pages/274399326/FE',
  },
  {
    type: 'Confluence',
    name: 'FE - HMG Developer 정기배포/hotfix flow',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/HDS/pages/768147463/FE+-+HMG+Developer+hotfix+flow',
  },
];

export const GROUPWARE_URLS: InputItem[] = [
  {
    type: 'Service',
    name: 'Jira',
    url: 'https://ignitecorp.atlassian.net/jira/software/c/projects/HG/boards/50',
  },
  {
    type: 'Service',
    name: 'Github (임시레포)',
    url: 'https://github.com/ignite-corp/hmg-groupware-bo-web',
  },
  {
    type: 'Service',
    name: 'Gitlab (assemble-fe)',
    url: 'https://gitlab.hmc.co.kr/hmg-groupware/hmg-groupware-portal/assemble-fe',
  },
  {
    type: 'Service',
    name: 'Pinpoint',
    url: 'https://pinpoint.hmg-corp.io/',
  },
  {
    type: 'Dooray',
    name: '3.9.2.4-차세대-그룹웨어-포털-Dev',
    url: 'https://hmg.dooray.com/task/3519486226737337967',
  },
  {
    type: 'Dooray',
    name: '3.9.2.2-차세대-그룹웨어-포털-UX',
    url: 'https://hmg.dooray.com/task/3402249994203509934',
  },
  {
    type: 'Dooray',
    name: '1.1.2.4-IT서비스디자인팀-마크업',
    url: 'https://hmg.dooray.com/task/3544350949746021916',
  },
  {
    type: 'Confluence',
    name: 'Dev FE) Phase, IA, 개발현황',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/HG/pages/813432866/Dev+FE+Phase+IA',
  },
  {
    type: 'Confluence',
    name: '현대 & 기아 디자인 가이드 정리',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/IDT/pages/788627560',
  },
  {
    type: 'Confluence',
    name: 'Dev FE) HMG 디자인시스템 - 컴포넌트 이관 특이사항',
    url: 'https://ignitecorp.atlassian.net/wiki/spaces/HG/pages/831553674/Dev+FE+HMG+-',
  },
  {
    type: 'Service',
    name: 'Sonarqube',
    url: 'https://sonarqube.hmg-corp.io/dashboard?id=D0754_hmg-groupware',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 로그인 (PC)',
    url: 'https://www.figma.com/design/XxUVIgYgUE6sTusCEgsiZK/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EB%A1%9C%EA%B7%B8%EC%9D%B8?node-id=1-71&t=8KJ99LORdDzyFC7P-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 로그인 (MO)',
    url: 'https://www.figma.com/design/XxUVIgYgUE6sTusCEgsiZK/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EB%A1%9C%EA%B7%B8%EC%9D%B8?node-id=29-4462&t=6E1uKA3HE38xrjYp-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 로그인 관리',
    url: 'https://www.figma.com/design/bJW5wo8CnYi41ACx8NCdyU/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EB%A1%9C%EA%B7%B8%EC%9D%B8%EA%B4%80%EB%A6%AC?node-id=0-1&t=IhNMLE2iXOQfho5a-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 레이아웃',
    url: 'https://www.figma.com/design/vcbFzjQE7riMAFr6Spv9DD/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83?node-id=1-26&t=3Wmyk0OrWhiShQOT-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 홈',
    url: 'https://www.figma.com/design/S7ocLfVc69UHbarLS8r4PD/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%ED%99%88?node-id=4-7074&t=K1I9VwXubwasyV9y-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 홈 화면 관리',
    url: 'https://www.figma.com/design/KDtzmbaGbvFtWu6kbkJG1C/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%ED%99%88%ED%99%94%EB%A9%B4-%EA%B4%80%EB%A6%AC?node-id=1-2&t=0gSekqV1O2NUxlps-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 홈 콘텐츠 설정',
    url: 'https://www.figma.com/design/2aznzxNGfvAZ7kugZn8aqo/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%ED%99%88-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%84%A4%EC%A0%95?node-id=0-3&t=O7nUbXLLX8S6Z9XH-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 마이페이지',
    url: 'https://www.figma.com/design/69LT4oyhJ1HwNQHLoyThx3/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EB%A7%88%EC%9D%B4%ED%8E%98%EC%9D%B4%EC%A7%80?node-id=122-176&t=AoNz3p2QZOI2OBmP-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 업무시스템',
    url: 'https://www.figma.com/design/0dBcL1vZfsRplQMTv8wzpp/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EC%97%85%EB%AC%B4%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%AA%A9%EB%A1%9D?node-id=1-3&t=ivjQsfyca3eSfUgH-1',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 업무시스템',
    url: 'https://www.figma.com/design/fRUk6EQn3FKJIjOxdsBrvS/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EC%97%85%EB%AC%B4%EC%8B%9C%EC%8A%A4%ED%85%9C-%EA%B4%80%EB%A6%AC?t=bkW7HV6b9JlydH00-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 제안게시판',
    url: 'https://www.figma.com/design/XzSuWw63CIiDCemctpcqUP/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EC%A0%9C%EC%95%88-%EA%B2%8C%EC%8B%9C%ED%8C%90?node-id=1-6904&t=oClHgzH6aFoKaGPp-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 제안게시판',
    url: 'https://www.figma.com/design/shXw3pOoYh90ZoS51jwZPU/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EC%A0%9C%EC%95%88-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EA%B4%80%EB%A6%AC?node-id=1-6904&t=gdWxhPdb7nBQiu7k-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 메뉴관리',
    url: 'https://www.figma.com/design/tOcbhYWH1y0Rxr83cg9rQ5/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EB%A9%94%EB%89%B4-%EA%B4%80%EB%A6%AC?node-id=1-66&t=3YBqbl3GB2NuMjEd-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 권한관리',
    url: 'https://www.figma.com/design/8U6DFpHR5tWgNW2COcz5mj/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EA%B6%8C%ED%95%9C%EA%B4%80%EB%A6%AC?node-id=0-1&t=4gNbtBMSQgyxIOat-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 코드관리',
    url: 'https://www.figma.com/design/R5W4ZuX0YyzJ3Fq7Ka5A4b/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EC%BD%94%EB%93%9C%EA%B4%80%EB%A6%AC?node-id=1-10&t=XX1EdR2Wu1YJ5XeU-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 예약/신청',
    url: 'https://www.figma.com/design/zQky5wqXWf1xDhcDzLNrQ6/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EC%98%88%EC%95%BD%2F%EC%8B%A0%EC%B2%AD?node-id=1-61884&t=lq4DFOymmhb5agD0-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 예약/신청',
    url: 'https://www.figma.com/design/1uEiZXbjRS78D3eyqY26kb/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EC%98%88%EC%95%BD%2F%EC%8B%A0%EC%B2%AD?node-id=1-30&t=IBwNfMDXnkR1xBEQ-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 개인증명서',
    url: 'https://www.figma.com/design/F5St6Se0q7FfxinOFIP2Na/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EA%B0%9C%EC%9D%B8%EC%A6%9D%EB%AA%85%EC%84%9C?node-id=1-30&t=xpSx51ZbDjSuBMKe-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 개인증명서',
    url: 'https://www.figma.com/design/xxq7KrMXF4ZDsbwxpidprq/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EA%B0%9C%EC%9D%B8%EC%A6%9D%EB%AA%85%EC%84%9C?node-id=1-30&t=Sh7zaginW0zzsgM7-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 휴양소',
    url: 'https://www.figma.com/design/AWGkMaZ1b8xMCHl0W23Vgi/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%ED%9C%B4%EC%96%91%EC%86%8C?node-id=0-1&t=Vg91o2UFmNYALjdl-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 휴양소',
    url: 'https://www.figma.com/design/rIGih0wdC5g1tBCjcBQgOq/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%ED%9C%B4%EC%96%91%EC%86%8C?node-id=0-1&t=3C8zlHg5Sscv3XR3-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 학자금',
    url: 'https://www.figma.com/design/97sD0Igz2YLB1IBvoRXfPB/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%ED%95%99%EC%9E%90%EA%B8%88?node-id=0-1&t=e3GnmMJ9y8CSuQMi-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 학자금',
    url: 'https://www.figma.com/design/dp7VwBJP6jz3YtKLiBifAF/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%ED%95%99%EC%9E%90%EA%B8%88?node-id=0-1&t=vY5MOCTgoqReBdik-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 근무복',
    url: 'https://www.figma.com/design/nbMTXi6l9iPFLmrlYvK0G7/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EA%B7%BC%EB%AC%B4%EB%B3%B5?node-id=0-1&t=GCxWdkCyFp4Vdnmu-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 근무복',
    url: 'https://www.figma.com/design/yf2apK3CrBdArXDhRlrMob/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EA%B7%BC%EB%AC%B4%EB%B3%B5?node-id=1-30&t=LXWXhjSjQEjDGqsf-0',
  },
  {
    type: 'Figma 기획 FO',
    name: 'FO 차량정비',
    url: 'https://www.figma.com/design/YaUE2U7UKuuQ8dfHeAZ2IA/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-FO_%EC%B0%A8%EB%9F%89%EC%A0%95%EB%B9%84?node-id=0-1&t=y2phD9kDFGEBX1w3-0',
  },
  {
    type: 'Figma 기획 BO',
    name: 'BO 차량정비',
    url: 'https://www.figma.com/design/xEMnLVLHfMSVZxj2PA6Nfs/%5B%EA%B7%B8%EB%A3%B9%EC%9B%A8%EC%96%B4_%EA%B8%B0%ED%9A%8D%5D-BO_%EC%B0%A8%EB%9F%89%EC%A0%95%EB%B9%84?node-id=0-1&t=Wffm2Os11TMS9rkq-0',
  },
];
