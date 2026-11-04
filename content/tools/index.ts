const tools = [
	{
		name: "NPM",
		icon: "https://cdn.simpleicons.org/npm",
		link: "https://www.npmjs.com/",
	},
	{
		name: "PNPM",
		icon: "https://cdn.simpleicons.org/pnpm",
		link: "https://pnpm.io/",
	},
	{
		name: "Node.js",
		icon: "https://cdn.simpleicons.org/nodedotjs",
		link: "https://nodejs.org/",
	},
	{
		name: "NestJS",
		icon: "https://cdn.simpleicons.org/nestjs",
		link: "https://nestjs.com/",
	},
	{
		name: "Express.js",
		icon: "https://cdn.simpleicons.org/express",
		link: "https://expressjs.com/",
	},
	{
		name: "FastAPI",
		icon: "https://cdn.simpleicons.org/fastapi",
		link: "https://fastapi.tiangolo.com/",
	},
	{
		name: "LangChain",
		icon: "https://cdn.simpleicons.org/langchain",
		link: "https://www.langchain.com/",
	},
	{
		name: "LangGraph",
		icon: "https://api.iconify.design/simple-icons/langgraph.svg",
		link: "https://www.langchain.com/langgraph",
	},
	{
		name: "Ollama",
		icon: "https://cdn.simpleicons.org/ollama",
		link: "https://ollama.ai/",
	},
	{
		name: "Nodemon",
		icon: "https://cdn.simpleicons.org/nodemon",
		link: "https://nodemon.io/",
	},
	{
		name: "ESLint",
		icon: "https://cdn.simpleicons.org/eslint",
		link: "https://eslint.org/",
	},
	{
		name: "Swagger",
		icon: "https://cdn.simpleicons.org/swagger",
		link: "https://swagger.io/",
	},
	{
		name: "JWT",
		icon: "https://cdn.simpleicons.org/jsonwebtokens",
		link: "https://jwt.io/",
	},
	{
		name: "TypeORM",
		icon: "https://cdn.simpleicons.org/typeorm",
		link: "https://typeorm.io/",
	},
	{
		name: "MySQL",
		icon: "https://cdn.simpleicons.org/mysql",
		link: "https://www.mysql.com/",
	},
	{
		name: "PostgreSQL",
		icon: "https://cdn.simpleicons.org/postgresql",
		link: "https://www.postgresql.org/",
	},
	{
		name: "MongoDB",
		icon: "https://cdn.simpleicons.org/mongodb",
		link: "https://www.mongodb.com/",
	},
	{
		name: "Amazon DynamoDB",
		icon: "https://api.iconify.design/simple-icons/amazondynamodb.svg",
		link: "https://aws.amazon.com/dynamodb/",
	},
	{
		name: "Qdrant",
		icon: "https://qdrant.tech/favicon.ico",
		link: "https://qdrant.tech/",
	},
	{
		name: "Redis",
		icon: "https://cdn.simpleicons.org/redis",
		link: "https://redis.io/",
	},
	{
		name: "RabbitMQ",
		icon: "https://cdn.simpleicons.org/rabbitmq",
		link: "https://www.rabbitmq.com/",
	},
	{
		name: "Apache Kafka",
		icon: "https://cdn.simpleicons.org/apachekafka",
		link: "https://kafka.apache.org/",
	},
	{
		name: "Webhooks",
		icon: "https://api.iconify.design/mdi/webhook.svg",
		link: "https://webhooks.fyi/",
	},
	{
		name: "WebRTC",
		icon: "https://cdn.simpleicons.org/webrtc",
		link: "https://webrtc.org/",
	},
	{
		name: "WebSockets",
		icon: "https://cdn.simpleicons.org/socketdotio",
		link: "https://websockets.org/",
	},
	{
		name: "gRPC",
		icon: "https://cdn.simpleicons.org/google",
		link: "https://grpc.io/",
	},
	{
		name: "GraphQL",
		icon: "https://cdn.simpleicons.org/graphql",
		link: "https://graphql.org/",
	},
	{
		name: "Docker",
		icon: "https://cdn.simpleicons.org/docker",
		link: "https://www.docker.com/",
	},
	{
		name: "Kubernetes",
		icon: "https://cdn.simpleicons.org/kubernetes",
		link: "https://kubernetes.io/",
	},
	{
		name: "Helm",
		icon: "https://cdn.simpleicons.org/helm",
		link: "https://helm.sh/",
	},
	{
		name: "Prometheus",
		icon: "https://cdn.simpleicons.org/prometheus",
		link: "https://prometheus.io/",
	},
	{
		name: "Grafana",
		icon: "https://cdn.simpleicons.org/grafana",
		link: "https://grafana.com/",
	},
	{
		name: "Turborepo",
		icon: "https://cdn.simpleicons.org/turborepo",
		link: "https://turbo.build/repo",
	},
	{
		name: "Nx",
		icon: "https://cdn.simpleicons.org/nx",
		link: "https://nx.dev/",
	},
	{
		name: "Firebase",
		icon: "https://cdn.simpleicons.org/firebase",
		link: "https://firebase.google.com/",
	},
	{
		name: "AWS",
		icon: "https://api.iconify.design/simple-icons/amazonaws.svg",
		link: "https://aws.amazon.com/",
	},
	{
		name: "DigitalOcean",
		icon: "https://cdn.simpleicons.org/digitalocean",
		link: "https://www.digitalocean.com/",
	},
	{
		name: "Vercel",
		icon: "https://cdn.simpleicons.org/vercel",
		link: "https://vercel.com/",
	},
	{
		name: "Git",
		icon: "https://cdn.simpleicons.org/git",
		link: "https://git-scm.com/",
	},
	{
		name: "GitHub",
		icon: "https://cdn.simpleicons.org/github",
		link: "https://github.com/",
	},
	{
		name: "GitLab",
		icon: "https://cdn.simpleicons.org/gitlab",
		link: "https://gitlab.com/",
	},
	{
		name: "Jira",
		icon: "https://cdn.simpleicons.org/jira",
		link: "https://www.atlassian.com/software/jira",
	},
	{
		name: "Hedera Hashgraph",
		icon: "https://cdn.simpleicons.org/hedera",
		link: "https://hedera.com/",
	},
	{
		name: "EVM",
		icon: "https://cdn.simpleicons.org/ethereum",
		link: "https://ethereum.org/en/developers/docs/evm/",
	},
	{
		name: "The Graph",
		icon: "https://api.iconify.design/cryptocurrency/grt.svg",
		link: "https://thegraph.com/",
	},
	{
		name: "Gnosis Safe",
		icon: "https://api.iconify.design/token-branded/safe.svg",
		link: "https://safe.global/",
	},
	{
		name: "OpenSea",
		icon: "https://cdn.simpleicons.org/opensea",
		link: "https://opensea.io/",
	},
];

export default tools;
