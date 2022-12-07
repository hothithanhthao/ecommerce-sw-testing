#Base Image
FROM ubuntu:latest

#Update APT repository & Install OpenSSH & necessary tools
RUN apt-get update \
    && apt-get install -yq \
        openssh-server \
        net-tools \
        python3 \
        curl

# Establish the operating directory of OpenSSH
RUN mkdir /var/run/sshd

#Allow Root login
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' \
    /etc/ssh/sshd_config

#Add a new 'ssluser' user
RUN useradd -m -s /bin/bash -G sudo -p $(openssl passwd -1 swtesting) ssluser

# Sudo for gaining "root" permission
RUN apt-get install -y sudo

# Skip requiring root password for ansible playbook
RUN echo "ssluser ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

# Install latest nodejs
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

COPY package*.json ./

RUN npm install

COPY . .

#Expose port 22
EXPOSE 22

# Set ENTRYPOINT
ENTRYPOINT service ssh start && python3 -m http.server 8000