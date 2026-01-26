import { Module } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './decorator/roles.guards';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
  providers: [JwtAuthGuard, RolesGuard],
  exports: [JwtAuthGuard, RolesGuard, CloudinaryModule],
})
export class CommonModule {}
