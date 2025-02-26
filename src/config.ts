type Config = {
	host: string;
	WebSocket: number;
	HTTP: number;
	serverName?: string;
	i: string;
	master?: string;
	wsUrl: string;
	apiUrl: string;
	keywordEnabled: boolean;
	reversiEnabled: boolean;
	notingEnabled: boolean;
	chartEnabled: boolean;
	serverMonitoring: boolean;
	checkEmojisEnabled?: boolean;
	checkEmojisAtOnce?: boolean;
	geminiProApiKey?: string;
	pLaMoApiKey?: string;
	prompt?: string;
	aichatRandomTalkEnabled?: boolean;
	aichatRandomTalkProbability?: string;
	aichatRandomTalkIntervalMinutes?: string;
	aichatGroundingWithGoogleSearchAlwaysEnabled?: boolean;
	mecab?: string;
	mecabDic?: string;
	memoryDir?: string;
};

import config from '../config.json' with { type: 'json' };
let ConfigData = config as unknown as Config;

ConfigData.wsUrl = `${config.host.replace("http", "ws")}:${config.WebSocket}`;
ConfigData.apiUrl = `${config.host}:${config.HTTP}/api`;

export default ConfigData;
