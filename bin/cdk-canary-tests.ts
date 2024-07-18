#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkCanaryTestsStack } from '../lib/cdk-canary-tests-stack';

const app = new cdk.App();
new CdkCanaryTestsStack(app, 'CdkCanaryTestsStack');
