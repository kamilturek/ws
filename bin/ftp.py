import os
from ftplib import FTP, error_perm


class FTPClient(FTP):

    def storedir(self, dirpath, force=False):
        if not os.path.exists(dirpath):
            raise FileNotFoundError('Directory does not exist.')
        if not os.path.isdir(dirpath):
            raise AssertionError('Specified path is not a directory.')

        for filename in os.listdir(dirpath):
            localpath = os.path.join(dirpath, filename)
            if os.path.isfile(localpath):
                with open(localpath, 'rb') as content:
                    self.storbinary(f'STOR {filename}', content)
            elif os.path.isdir(localpath):
                try:
                    self.mkd(filename)
                except error_perm as ex:
                    if not force:
                        raise
                    if not ex.args[0].startswith('550'):
                        raise
                self.cwd(filename)
                self.storedir(localpath, force)
                self.cwd('..')
