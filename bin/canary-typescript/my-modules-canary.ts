// import * as synthetics from 'aws-cdk-lib/aws-synthetics';
// import * as path from 'path';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';

    
// export class MyStack extends Stack {
//     constructor(scope: Construct, id: string, props?: StackProps) {
//       super(scope, id, props);
  

//         const MyModulesCanary = new synthetics.Canary(this, 'my-modules-canary', {
//             schedule: synthetics.Schedule.once(),
//             test: synthetics.Test.custom({
//             code: synthetics.Code.fromAsset(path.join(__dirname, 'lib', 'canary-javascript', 'my-modules-canary.js')),
//             handler: 'myModulesCanary',
//             }),
//             runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
//             environmentVariables: {
//             stage: 'prod',
//             },
//         });

//     }
// }