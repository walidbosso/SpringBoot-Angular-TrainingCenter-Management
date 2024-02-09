package univ.iwa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import univ.iwa.model.Formation;
import univ.iwa.model.Individu;

@Service
public class EmailService {
	
	@Autowired
	private JavaMailSender javaMailSender;
	
	public void sendFeedBack(Formation formation, Individu individu) {
		try {
	        MimeMessage message = javaMailSender.createMimeMessage();
	        MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
        
			messageHelper.setFrom("medAymane.Asl@gmail.com");
		
	        messageHelper.setTo(individu.getEmail());
	        messageHelper.setSubject("Feedback Request for: " + formation.getNom() + " Training");
	        
	        String messageContent = 
	        		"<html lang=\"en\">" + 
	        		"<head>" + 
	        		  "<meta charset=\"UTF-8\">" + 
	        		"</head>" + 
	        		"<body>" + 
	        		  "<p>Dear " + individu.getNom() + ",</p>" + 
	        		  "<p>We hope this email finds you well.</p>" + 
	        		  "<p>" + 
	        			"We would like to kindly ask for your feedback regarding the recent formation you attended. " + 
	        			"Your input is invaluable to us and will help us improve our services. " + 
	        			"Please take a moment to evaluate the performance of the trainer based on the following criteria:" + 
	        		  "</p>" + 
	        		  "<ol>" + 
	        		    "<li>Quality of Pedagogy</li>" + 
	        		    "<li>Pacing of the Course</li>" + 
	        		    "<li>Course Material and Practical Exercises</li>" + 
	        		    "<li>Trainer's Mastery of the Subject Matter</li>" + 
	        		  "</ol>" + 
	        		  "<p>" + 
	        		    "Your honest feedback will enable us to enhance the learning experience for future participants." + 
	        		  "</p>" + 
	        		  "<p>" + 
	        		    "Please note that you can only submit feedback once. " + 
	        		    "Your unique feedback code is: " + individu.getCode() + ". " + 
	        		    "Please use this code when filling out the feedback form." + 
	        		  "</p>" + 
	        		  "<p>" + 
	        		    "Please click on the link below to complete the evaluation:" + 
	        		  "</p>" + 
	        		  "<p><a href=\"http://localhost:4200/#/feedback/" + formation.getId() + "\">Feedback Link</a></p>" + 
	        		  "<p>Thank you for your cooperation and contribution towards continuous improvement.</p>" + 
	        		  "<p>Best regards,<br>Training Center</p>" + 
	        		"</body>" + 
	        		"</html>";
	        message.setContent(messageContent, "text/html");
	        javaMailSender.send(message);
        } catch (MessagingException e) {
			System.out.println("Error sending email");
			e.printStackTrace();
		}
    }
}
