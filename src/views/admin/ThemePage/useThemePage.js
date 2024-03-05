import React from 'react';
import { useLocation, useParams } from "react-router-dom";
import {
  useFetchThemePageBlocks,
  useDeleteThemePage
} from "../../../services/admin/admin.api";

export const useThemePage = () => {
  const { themeId, pageId } = useParams();
  const { data, isLoading, error } = useFetchThemePageBlocks(pageId)
  const { isPending: pageIsDeleting, mutate: deleteThemePage } = useDeleteThemePage({themeId, pageId})

  return {
    data,
    isLoading,
    error,
    pageIsDeleting,
    deleteThemePage
  }
}
