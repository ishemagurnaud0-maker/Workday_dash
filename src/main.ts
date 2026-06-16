import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {ClassSerializerInterceptor, ValidationPipe} from '@nestjs/common'
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    rawBody:true,
  });

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }
  ));

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector)),
    new ResponseInterceptor()
  );

  app.useGlobalFilters(new HttpExceptionFilter());



  app.enableCors();
  app.setGlobalPrefix('api');

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('BrooksBridge API')
    .setDescription('A comprehensive HR management system API for employee management, meetings, payments, and notifications')
    .setVersion('1.0')
    .addTag('Authentication', 'User authentication and registration endpoints')
    .addTag('Employees', 'Employee management operations')
    .addTag('Meetings', 'Meeting scheduling and management')
    .addTag('Payments', 'Salary payments and payroll management')
    .addTag('Notifications', 'Real-time notifications')
    .addTag('Chats', 'Chat and messaging system')
    .addTag('Departments', 'Department management')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
  console.log(`App-server is running on port ${process.env.PORT}`)
  console.log(`Swagger documentation available at: http://localhost:${process.env.PORT ?? 3000}/api/docs`)
}
bootstrap();
