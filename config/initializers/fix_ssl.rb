require 'open-uri'
require 'net/https'

module Net
  class HTTP
    alias_method :original_use_ssl=, :use_ssl=

    def use_ssl=(flag)
      if Rails.application.config.ssl_ca_file == 'lib/ca-bundle.crt'
        self.ca_file = Rails.root.join('lib/ca-bundle.crt').to_s
      else
        self.ca_file = Rails.application.config.ssl_ca_file 
      end
      self.verify_mode = OpenSSL::SSL::VERIFY_PEER
      self.original_use_ssl = flag
    end
  end
end