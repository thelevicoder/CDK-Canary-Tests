// import * as synthetics from 'aws-cdk-lib/aws-synthetics';
// import * as path from 'path';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';

    
// export class MyStack extends Stack {
//     constructor(scope: Construct, id: string, props?: StackProps) {
//       super(scope, id, props);
  

//         const ForgotPasswordCanary = new synthetics.Canary(this, 'forgotpassword-canary', {
//             schedule: synthetics.Schedule.once(),
//             test: synthetics.Test.custom({
//             code: synthetics.Code.fromAsset(path.join(__dirname, 'lib', 'canary-javascript', 'forgotpassword-canary.js')),
//             handler: 'forgotPasswordCanary',
//             }),
//             runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
//             environmentVariables: {
//             stage: 'prod',
//             },
//         });

//     }
// }