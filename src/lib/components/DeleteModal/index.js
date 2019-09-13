import swal from '@sweetalert/with-react';
import { useTranslation } from 'react-i18next';
/**
 * Delete Modal
 * @param {Number} id - item id
 * @param {Function} callback - callback func will call on submit
 */
export function DeleteModal(id, callback) {
  const { t } = useTranslation();

  return () =>
    swal({
      title: t('Are you sure you want to delete?'),
      icon: 'warning',
      buttons: [t('Cancel'), t('Delete')],
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        callback(id);
      }
    });
}
