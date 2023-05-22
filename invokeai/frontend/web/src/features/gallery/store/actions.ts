import { createAction } from '@reduxjs/toolkit';
import { ImageNameAndType } from 'features/parameters/store/actions';
import { ImageDTO } from 'services/api';

export const requestedImageDeletion = createAction<
  ImageDTO | ImageNameAndType | undefined
>('gallery/requestedImageDeletion');
