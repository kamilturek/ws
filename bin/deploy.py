#!/usr/bin/env python3

import os
import sys

from ftp import FTPClient

if __name__ == '__main__':
    if len(sys.argv) != 2:
        raise AssertionError('Wrong number of arguments.')

    FTP_HOST = os.environ['FTP_HOST']
    FTP_USER = os.environ['FTP_USER']
    FTP_PASSWORD = os.environ['FTP_PASSWORD']

    ftp = FTPClient(FTP_HOST, FTP_USER, FTP_PASSWORD)
    ftp.cwd('www')
    ftp.storedir(sys.argv[1], force=True)
