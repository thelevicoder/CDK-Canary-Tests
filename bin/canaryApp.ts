import { App } from 'aws-cdk-lib';
import { MyStack as CreateAccountStack } from './canary-typescript/create-account-canary';
import { MyStack as DocumentationStack } from './canary-typescript/documentation-canary';
import { MyStack as ForgotPasswordStack } from './canary-typescript/forgot-password-canary';
import { MyStack as HomepageStack } from './canary-typescript/homepage-canary';
import { MyStack as LoginStack } from './canary-typescript/login-canary';
import { MyStack as MyCompanyStack } from './canary-typescript/my-company-canary';
import { MyStack as MyModulesStack } from './canary-typescript/my-modules-canary';
import { MyStack as OnboardingStack } from './canary-typescript/onboarding-canary';
import { MyStack as ProfileEditStack } from './canary-typescript/profile-edit-canary';
import { MyStack as SupportStack } from './canary-typescript/support-canary';
// Import other stacks similarly

const app = new App();

new CreateAccountStack(app, 'CreateAccountStack');
new DocumentationStack(app, 'DocumentationStack');
new ForgotPasswordStack(app, 'CreateAccountStack');
new HomepageStack(app, 'HomepageStack');
new LoginStack(app, 'LoginStack');
new MyCompanyStack(app, 'MyCompanyStack');
new MyModulesStack(app, 'MyModulesStack');
new OnboardingStack(app, 'OnboardingStack');
new ProfileEditStack(app, 'ProfileEditStack');
new SupportStack(app, 'SupportStack');
// Instantiate other stacks similarly


app.synth();