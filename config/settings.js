'use strict';

var gateHost = 'http://localhost:8084';
var artifactsEnabled = 'true' === 'true';
var artifactsRewriteEnabled = 'false' === 'true';
var atlasWebComponentsUrl = '';
var authEnabled = 'false' === 'true';
var authEndpoint = gateHost + '/auth/user';
var bakeryDetailUrl = gateHost + '/bakery/logs/{{context.region}}/{{context.status.resourceId}}';
var canaryFeatureDisabled = 'false' !== 'true';
var canaryStagesEnabled = '{%canary.stages%}' === 'true';
var changelogGistId = '30e40f6278a7c1a1450c179a9a4bb92e';
var changelogGistName = 'changelog.md';
var chaosEnabled = 'false' === 'true';
var defaultCanaryJudge = '{%canary.defaultJudge%}';
var defaultMetricsStore = '{%canary.defaultMetricsStore%}';
var defaultMetricsAccountName = '{%canary.defaultMetricsAccount%}';
var defaultStorageAccountName = '{%canary.defaultStorageAccount%}';
var displayTimestampsInUserLocalTime = '{%features.displayTimestampsInUserLocalTime%}' === 'true';
var entityTagsEnabled = false;
var fiatEnabled = 'false' === 'true';
var gceStatefulMigsEnabled = '{%features.gceStatefulMigsEnabled%}' === 'true';
var gremlinEnabled = 'false' === 'true';
var iapRefresherEnabled = '{%features.iapRefresherEnabled%}' === 'true';
var infrastructureStagesEnabled = 'false' === 'true';
var managedPipelineTemplatesV2UIEnabled = 'false' === 'true';
var jobsEnabled = 'false' === 'true';
var maxPipelineAgeDays = '{%maxPipelineAgeDays%}';
var mineCanaryEnabled = 'false' === 'true';
var notificationsEnabled = 'false' === 'true';
var onDemandClusterThreshold = '{%onDemandClusterThreshold%}';
var pipelineTemplatesEnabled = 'false' === 'true';
var reduxLoggerEnabled = '{%canary.reduxLogger%}' === 'true';
var showAllConfigsEnabled = '{%canary.showAllCanaryConfigs%}' === 'true';
var slack = {
  botName: '',
  enabled: 'false' === 'true',
};
var sms = {
  enabled: 'false' === 'true',
};
var githubStatus = {
  enabled: 'false' === 'true',
};
var templatesEnabled = '{%canary.templatesEnabled%}' === 'true';
var travisEnabled = 'false' === 'true';
var timezone = 'America/Los_Angeles';
var version = '1.16.0';
var werckerEnabled = 'false' === 'true';

// Cloud Providers
var appengine = {
  defaults: {
    account: '',
    editLoadBalancerStageEnabled: 'false' === 'true',
  },
};
var aws = {
  defaults: {
    account: '',
    iamRole: 'BaseIAMRole',
    region: '{%aws.default.region%}',
  },
  defaultSecurityGroups: [],
  loadBalancers: {
    // if true, VPC load balancers will be created as internal load balancers if the selected subnet has a purpose
    // tag that starts with "internal"
    inferInternalFlagFromSubnet: false,
  },
  useAmiBlockDeviceMappings: false,
};
var azure = {
  defaults: {
    account: '',
    region: 'westus',
  },
};
var cloudfoundry = {
  defaults: {
    account: '',
  },
};
var dcos = {
  defaults: {
    account: '',
  },
};
var ecs = {
  defaults: {
    account: '',
  },
};
var gce = {
  defaults: {
    account: '',
    region: 'us-central1',
    zone: 'us-central1-f',
  },
  associatePublicIpAddress: true,
};
var kubernetes = {
  defaults: {
    account: 'my-k8s-v2-account',
    instanceLinkTemplate: '{{host}}/api/v1/proxy/namespaces/{{namespace}}/pods/{{name}}',
    internalDNSNameTemplate: '{{name}}.{{namespace}}.svc.cluster.local',
    namespace: 'default',
    proxy: 'localhost:8001',
  },
};
var oracle = {
  defaults: {
    account: '{%oracle.default.account%}',
    region: '{%oracle.default.region%}',
  },
};

window.spinnakerSettings = {
  authEnabled: authEnabled,
  authEndpoint: authEndpoint,
  authTtl: 600000,
  bakeryDetailUrl: bakeryDetailUrl,
  canary: {
    atlasWebComponentsUrl: atlasWebComponentsUrl,
    defaultJudge: defaultCanaryJudge,
    featureDisabled: canaryFeatureDisabled,
    reduxLogger: reduxLoggerEnabled,
    metricsAccountName: defaultMetricsAccountName,
    metricStore: defaultMetricsStore,
    showAllConfigs: showAllConfigsEnabled,
    stagesEnabled: canaryStagesEnabled,
    storageAccountName: defaultStorageAccountName,
    templatesEnabled: templatesEnabled,
  },
  changelog: {
    fileName: changelogGistName,
    gistId: changelogGistId,
  },
  checkForUpdates: false,
  defaultCategory: 'serverGroup',
  defaultInstancePort: 80,
  defaultProviders: [
    'appengine',
    'aws',
    'azure',
    'cloudfoundry',
    'dcos',
    'ecs',
    'gce',
    'kubernetes',
    'oracle',
    'titus',
  ],
  defaultTimeZone: timezone, // see http://momentjs.com/timezone/docs/#/data-utilities/
  feature: {
    artifacts: artifactsEnabled,
    artifactsRewrite: artifactsRewriteEnabled,
    canary: mineCanaryEnabled,
    chaosMonkey: chaosEnabled,
    displayTimestampsInUserLocalTime: displayTimestampsInUserLocalTime,
    entityTags: entityTagsEnabled,
    fiatEnabled: fiatEnabled,
    gceStatefulMigsEnabled: gceStatefulMigsEnabled,
    gremlinEnabled: gremlinEnabled,
    iapRefresherEnabled: iapRefresherEnabled,
    infrastructureStages: infrastructureStagesEnabled,
    jobs: jobsEnabled,
    managedPipelineTemplatesV2UI: managedPipelineTemplatesV2UIEnabled,
    notifications: notificationsEnabled,
    pagerDuty: false,
    pipelines: true,
    pipelineTemplates: pipelineTemplatesEnabled,
    roscoMode: true,
    snapshots: false,
    travis: travisEnabled,
    versionedProviders: true,
    wercker: werckerEnabled,
  },
  gateUrl: gateHost,
  gitSources: ['bitbucket', 'gitlab', 'github', 'stash'],
  maxPipelineAgeDays: maxPipelineAgeDays,
  newApplicationDefaults: {
    chaosMonkey: false,
  },
  notifications: {
    bearychat: {
      enabled: true,
    },
    email: {
      enabled: true,
    },
    githubStatus: githubStatus,
    googlechat: {
      enabled: true,
    },
    pubsub: {
      enabled: true,
    },
    slack: slack,
    sms: sms,
  },
  onDemandClusterThreshold: onDemandClusterThreshold,
  pagerDuty: {
    required: false,
  },
  pollSchedule: 30000,
  providers: {
    appengine: appengine,
    aws: aws,
    azure: azure,
    cloudfoundry: cloudfoundry,
    dcos: dcos,
    ecs: ecs,
    gce: gce,
    kubernetes: kubernetes,
    oracle: oracle,
    titus: {
      defaults: {
        account: 'titustestvpc',
        iamProfile: '{{application}}InstanceProfile',
        region: 'us-east-1',
      },
    },
  },
  pubsubProviders: ['google'], // TODO(joonlim): Add amazon once it is confirmed that amazon pub/sub works.
  triggerTypes: [
    'artifactory',
    'concourse',
    'cron',
    'docker',
    'git',
    'jenkins',
    'pipeline',
    'pubsub',
    'travis',
    'webhook',
    'wercker',
  ],
  version: version,
};

