// import * as synthetics from 'aws-cdk-lib/aws-synthetics';
// import * as path from 'path';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';

    
// export class MyStack extends Stack {
//     constructor(scope: Construct, id: string, props?: StackProps) {
//       super(scope, id, props);
  

//         const OnboardingCanary = new synthetics.Canary(this, 'onboarding-canary', {
//             schedule: synthetics.Schedule.once(),
//             test: synthetics.Test.custom({
//             code: synthetics.Code.fromAsset(path.join(__dirname, 'lib', 'canary-javascript', 'onboarding-canary.js')),
//             handler: 'onboardingCanary',
//             }),
//             runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
//             environmentVariables: {
//             stage: 'prod',
//             },
//         });

//     }
// }