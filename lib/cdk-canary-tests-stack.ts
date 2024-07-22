import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as synthetics from 'aws-cdk-lib/aws-synthetics';
import * as path from 'path';
import * as iam from 'aws-cdk-lib/aws-iam';

export class CdkCanaryTestsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const role = new iam.Role(this, 'CanaryRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'),
        iam.ManagedPolicy.fromAwsManagedPolicyName('CloudWatchSyntheticsFullAccess'),
      ],
    });

    new synthetics.Canary(this, 'createAccountCanary', {
      canaryName: 'create-account-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'create-account-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'documentationCanary', {
      canaryName: 'documentation-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'documentation-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'forgotPasswordCanary', {
      canaryName: 'forgot-password-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'forgotpassword-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'homepageCanary', {
      canaryName: 'homepage-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'homepage-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'loginCanary', {
      canaryName: 'login-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'login-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'myCompanyCanary', {
      canaryName: 'my-company-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'my-company-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'SupportCanary', {
      canaryName: 'support-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname, 'canary-javascript','support-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'ProfileEditCanary', {
      canaryName: 'profile-edit-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'profile-edit-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'myModulesCanary', {
      canaryName: 'my-modules-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'my-modules-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
 
 
    new synthetics.Canary(this, 'onboardingCanary', {
      canaryName: 'onboarding-canary',
      role,
      runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
      test: synthetics.Test.custom({
        code: synthetics.Code.fromAsset(path.join(__dirname,'canary-javascript', 'onboarding-canary.js')),
        handler: 'index.handler',
      }),
      schedule: synthetics.Schedule.once(),
    });
  }
 }
 
 
 
 