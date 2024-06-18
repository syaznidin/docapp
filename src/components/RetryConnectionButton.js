import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, Alert } from 'react-native';

const RetryConnectionButton = ({ onRetry }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle retry action
  const handleRetry = async () => {
    setLoading(true);
    setError(null); // Clear previous error if any

    try {
      await onRetry(); // Call the retry function passed as prop
      setLoading(false); // Reset loading state on success
    } catch (err) {
      setError(err.message); // Handle error if retry fails
      setLoading(false); // Reset loading state on failure
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          {error && <Text style={{ marginBottom: 10, color: 'red' }}>{error}</Text>}
          <Button title="Retry Connection" onPress={handleRetry} />
        </>
      )}
    </View>
  );
};

export default RetryConnectionButton;
