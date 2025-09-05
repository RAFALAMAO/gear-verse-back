import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    app: {
      appName: process.env.APP_NAME,
      app_port: process.env.APP_PORT,
      api_key: process.env.APP_API_KEY,
      jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
      domain: process.env.APP_DOMAIN,
      env: process.env.NODE_ENV,
    },
    sendinblue: {
      api_key: process.env.API_KEY_SENDINBLUE,
    },
    aws: {
      s3: {
        region: process.env.AWS_S3_REGION,
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        bucketDev: process.env.AWS_S3_BUCKET_NAME_DEV,
        bucketProd: process.env.AWS_S3_BUCKET_NAME_PROD,
        bucketStg: process.env.AWS_S3_BUCKET_NAME_STG,
        bucketDevData: process.env.AWS_S3_BUCKET_NAME_DEV_DATA,
        bucketProdData: process.env.AWS_S3_BUCKET_NAME_PROD_DATA,
        bucketReportDev: process.env.AWS_S3_BUCKET_REPORT_NAME_DEV,
        bucketReportProd: process.env.AWS_S3_BUCKET_REPORT_NAME_PROD,
      },
      quickSight: {
        region: process.env.AWS_QS_REGION,
        secretAccessKey: process.env.AWS_QS_SECRET_ACCESS_KEY,
        iAmUserName: process.env.AWS_QS_IAM_USER_NAME,
        sessionMinutes: process.env.AWS_QS_SESSION_MINUTES,
        accessKeyId: process.env.AWS_QS_ACCESS_KEY_ID,
        accountId: process.env.AWS_QS_AWS_ACCOUNT_ID,
        dashboardId: process.env.AWS_QS_DASHBOARD_ID,
      },
    },
    postgres: {
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      port: parseInt(process.env.DB_PORT) || 5432,
    },
    exchange_rate: {
      api_key: process.env.API_KEY_EXCHANGE_RATE,
      url: process.env.URL_EXCHANGE_RATE,
    },
    cron: {
      disable: process.env.DISABLE_CRON_TASKS,
    },
    botData: {
      prod: process.env.URL_PROD_ROCKET_BOT,
      dev: process.env.URL_PROD_ROCKET_BOT,
    },
  };
});
