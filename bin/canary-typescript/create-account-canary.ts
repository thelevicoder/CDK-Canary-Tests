// import * as synthetics from 'aws-cdk-lib/aws-synthetics';
// import * as path from 'path';
// import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
// import * as iam from 'aws-cdk-lib/aws-iam';



    
// export class MyStack extends Stack {
//     constructor(scope: Construct, id: string, props?: StackProps) {
//       super(scope, id, props);
  

//         const CreateAccountCanary = new synthetics.Canary(this, 'create-account-canary', {
//             schedule: synthetics.Schedule.once(),
//             test: synthetics.Test.custom({
//             code: synthetics.Code.fromAsset(path.join(__dirname, 'lib', 'canary-javascript', 'create-account-canary.js')),
//             handler: 'createAccountCanary',
//             }),
//             runtime: synthetics.Runtime.SYNTHETICS_NODEJS_PUPPETEER_7_0,
//             environmentVariables: {
//             stage: 'prod',
//             },
//         });

//     }
// }