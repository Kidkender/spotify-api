import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  create(req: CreateSongDto) {
    return 'create data';
  }

  findAll() {
    return 'Find All';
  }
}
