include .env
export

SHELL := /bin/bash

IGNORE_IMAGES = true

all: build lowercase-folders copy-to-ftp


copy-to-ftp:
	@echo "Copying files to ftp...\n"
#	@make transfer > /dev/null 2>&1
	@make transfer
	@echo "Copying finished!\n"


build:
	@echo "Building...\n"
#	@make generate > /dev/null 2>&1
	@make generate
	@echo "Build finished\n"


generate:
	bunx nuxi generate


lowercase-folders:
	find ./.output -type d | while read -r folder; do \
		lowercase=$$(echo "$$folder" | tr 'A-Z' 'a-z'); \
        if [ "$$folder" != "$$lowercase" ]; then \
            mv "$$folder" "$$lowercase"; \
        fi; \
    done


transfer:
ifeq ($(IGNORE_IMAGES), true)
	lftp -c "open -u ${FTP_USERNAME},${FTP_PASSWORD} ${FTP_HOST}:${FTP_PORT}; mirror --only-newer --reverse -x images/* --exclude-glob '.DS_Store' --delete --verbose=3 ${FTP_LOCAL_PATH} ${FTP_DEPLOYMENT_PATH} quit"
else
	lftp -c "open -u ${FTP_USERNAME},${FTP_PASSWORD} ${FTP_HOST}:${FTP_PORT}; mirror --only-newer --reverse -x images/original --exclude-glob '.DS_Store' --delete --verbose=3 ${FTP_LOCAL_PATH} ${FTP_DEPLOYMENT_PATH} quit"
endif
	rm -r ./.output

